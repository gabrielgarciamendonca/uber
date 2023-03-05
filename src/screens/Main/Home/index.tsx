import React, {
  useCallback,
  useEffect,
  useRef,
  useState
} from 'react';

import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import {
  HomeBottomSpace,
  HomeButtonCurrentLocationContainer,
  HomeButtonImage,
  HomeButtonMenuContainer,
  HomeContainer,
  HomeCurrentLocationImage
} from './styles';
import mapStyle from '../../../assets/maps/style.json'
import { ButtonDrawer } from '../../../components/ButtonDrawer';
import { THome } from './types';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Geolocation from '@react-native-community/geolocation';
import { Loading } from '../../Loading';
import { PickAndDrop } from '../../../components/PickAndDrop';
import { api } from '../../../services/api';
import { GOOGLE_API } from '@env';

export function Home({ navigation }: THome) {
  const [opened, setOpened] = useState(false);
  const mapRef = useRef<MapView>(null);
  const { top } = useSafeAreaInsets();
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
        loaded: true
      })
      console.log(`${info.coords.latitude}, ${info.coords.longitude}&key=${GOOGLE_API}`);

      api.position.get(`json?latlng=${info.coords.latitude}, ${info.coords.longitude}&key=${GOOGLE_API}`)
        .then(({ data }) => {
          const results = data.results[0].address_components;
          setTimeout(() => setFrom(`${results[0].long_name} ${results[1].long_name}`), 3000);
        }).catch(_ => {
          setFrom('cannot get your position');
        })
    });

  }, []);

  const getCurrentLocation = useCallback(() => {
    if (position.loaded) {
      mapRef.current?.animateToRegion({
        latitude: position.latitude,
        longitude: position.longitude,
        latitudeDelta: 0,
        longitudeDelta: 0.01,
      })
    }
  }, [position, mapRef.current]);

  const handleOpenResume = useCallback(() => {
    if (opened) {
      navigation.navigate('PlaceManager');
    } else {
      setOpened(true);
    }
  }, [opened])

  if (!position.loaded) {
    return <Loading />
  }

  return (
    <HomeContainer>
      <MapView
        onPress={() => setOpened(false)}
        onPanDrag={() => setOpened(false)}
        style={{ flex: 1 }}
        customMapStyle={mapStyle}
        provider={PROVIDER_GOOGLE}
        showsBuildings={false}
        minZoomLevel={14}
        showsCompass={false}
        initialRegion={{
          latitude: position.latitude,
          longitude: position.longitude,
          latitudeDelta: 0,
          longitudeDelta: 0.01,
        }}
        showsUserLocation={true}
        showsMyLocationButton={false}
        ref={mapRef}
      >
        {/* <Marker
          tappable={false}
          coordinate={{
            latitude: position.latitude,
            longitude: position.longitude,
          }}
        >
          <Image style={{ width: 28, resizeMode: 'contain' }} source={require('../../../assets/icons/map-ping.png')} />
        </Marker> */}
      </MapView>

      <HomeButtonMenuContainer style={{ top: top + 20 }}>
        <ButtonDrawer onPress={() => navigation?.openDrawer()}>
          <HomeButtonImage source={require('../../../assets/icons/menu.png')} />
        </ButtonDrawer>
      </HomeButtonMenuContainer>

      <HomeBottomSpace>
        {!opened &&
          <HomeButtonCurrentLocationContainer>
            <ButtonDrawer onPress={getCurrentLocation}>
              <HomeCurrentLocationImage source={require('../../../assets/icons/current-location.png')} />
            </ButtonDrawer>
          </HomeButtonCurrentLocationContainer>
        }
        <PickAndDrop pickUp={from} opened={opened} onPress={handleOpenResume} />
      </HomeBottomSpace>
    </HomeContainer>
  );
}
