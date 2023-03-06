import React, {useCallback, useEffect, useRef, useState} from 'react';

import {Image} from 'react-native';

import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {
  HomeBottomSpace,
  HomeButtonCurrentLocationContainer,
  HomeButtonImage,
  HomeButtonMenuContainer,
  HomeContainer,
  HomeCurrentLocationImage,
} from './styles';
import mapStyle from '../../../assets/maps/style.json';
import {ButtonDrawer} from '../../../components/ButtonDrawer';
import {THome} from './types';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Geolocation from '@react-native-community/geolocation';
import {Loading} from '../../Loading';
import {PickAndDrop} from '../../../components/PickAndDrop';
import {api} from '../../../services/api';
import {GOOGLE_API} from '@env';
import MapViewDirections from 'react-native-maps-directions';
import {useTheme} from 'styled-components/native';

// const origin = {latitude: 37.3318456, longitude: -122.0296002};
const destination = {latitude: 37.771707, longitude: -122.4053769};

export function Home({navigation}: THome) {
  const [count, setCount] = useState(0);
  const [opened, setOpened] = useState(false);
  const mapRef = useRef<MapView>(null);
  const theme = useTheme();
  const {top} = useSafeAreaInsets();
  const [position, setPosition] = useState({
    latitude: 0,
    longitude: 0,
    loaded: false,
  });
  const [from, setFrom] = useState('');

  useEffect(() => {
    Geolocation.getCurrentPosition(info => {
      setPosition({
        latitude: info.coords.latitude,
        longitude: info.coords.longitude,
        loaded: true,
      });
      console.log(
        `${info.coords.latitude}, ${info.coords.longitude}&key=${GOOGLE_API}`,
      );

      api.position
        .get(
          `json?latlng=${info.coords.latitude}, ${info.coords.longitude}&key=${GOOGLE_API}`,
        )
        .then(({data}) => {
          const results = data.results[0].address_components;
          setTimeout(
            () => setFrom(`${results[0].long_name} ${results[1].long_name}`),
            3000,
          );
        })
        .catch(_ => {
          setFrom('cannot get your position');
        });
    });
  }, []);

  const systemFitBetweenLocation = useCallback(() => {
    mapRef.current?.fitToCoordinates(
      [
        destination,
        {latitude: position.latitude, longitude: position.longitude},
      ],
      {
        animated: true,
        edgePadding: {
          bottom: 32,
          left: 64,
          right: 64,
          top: 32,
        },
      },
    );
  }, [position.latitude, position.longitude]);

  const getCurrentLocation = useCallback(() => {
    if (position.loaded) {
      if (count % 2 === 0) {
        mapRef.current?.animateToRegion({
          latitude: position.latitude,
          longitude: position.longitude,
          latitudeDelta: 0,
          longitudeDelta: 0.01,
        });
      } else {
        systemFitBetweenLocation();
      }
    }
    setCount(old => old + 1);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [position, mapRef.current, count]);

  const handleOpenResume = useCallback(() => {
    if (opened) {
      navigation.navigate('PlaceManager');
    } else {
      setOpened(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [opened]);

  if (!position.loaded) {
    return <Loading />;
  }

  return (
    <HomeContainer>
      <MapView
        onPress={() => setOpened(false)}
        onPanDrag={() => setOpened(false)}
        style={{flex: 1}}
        customMapStyle={mapStyle}
        provider={PROVIDER_GOOGLE}
        showsBuildings={false}
        // minZoomLevel={0}
        showsCompass={false}
        initialRegion={{
          latitude: position.latitude,
          longitude: position.longitude,
          latitudeDelta: 0,
          longitudeDelta: 1,
        }}
        showsUserLocation={true}
        showsMyLocationButton={false}
        ref={mapRef}>
        <MapViewDirections
          origin={{
            latitude: position.latitude,
            longitude: position.longitude,
          }}
          onReady={systemFitBetweenLocation}
          strokeWidth={6}
          destination={destination}
          apikey={GOOGLE_API}
          strokeColor={theme.colors.secondary}
        />
        <Marker tappable={false} coordinate={destination}>
          <Image
            style={{width: 28, resizeMode: 'contain'}}
            source={require('../../../assets/icons/map-ping.png')}
          />
        </Marker>
      </MapView>

      <HomeButtonMenuContainer style={{top: top + 20}}>
        <ButtonDrawer onPress={() => navigation?.openDrawer()}>
          <HomeButtonImage source={require('../../../assets/icons/menu.png')} />
        </ButtonDrawer>
      </HomeButtonMenuContainer>

      <HomeBottomSpace>
        {!opened && (
          <HomeButtonCurrentLocationContainer>
            <ButtonDrawer onPress={getCurrentLocation}>
              <HomeCurrentLocationImage
                source={require('../../../assets/icons/current-location.png')}
              />
            </ButtonDrawer>
          </HomeButtonCurrentLocationContainer>
        )}
        <PickAndDrop pickUp={from} opened={opened} onPress={handleOpenResume} />
      </HomeBottomSpace>
    </HomeContainer>
  );
}
