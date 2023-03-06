import React, {
} from 'react';

import { Image } from 'react-native';

import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
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
import { THomeView } from './types';
import { Loading } from '../../Loading';
import { PickAndDrop } from '../../../components/PickAndDrop';
import MapViewDirections from 'react-native-maps-directions';
import { GOOGLE_API } from '@env';


export function HomeView({
    getCurrentLocation,
    handleOpenDrawer,
    handleOpenResume,
    mapRef,
    opened,
    position,
    setOpened,
    top,
    destination,
    colors,
    systemOnReady
}: THomeView) {
    if (!position.loaded) {
        return <Loading />;
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
                <Marker
                    tappable={false}
                    coordinate={destination}
                >
                    <Image style={{ width: 28, resizeMode: 'contain' }} source={require('../../../assets/icons/map-ping.png')} />
                </Marker>
                <MapViewDirections
                    origin={
                        {
                            latitude: position.latitude,
                            longitude: position.longitude,
                        }
                    }
                    mode='DRIVING'
                    precision='high'
                    optimizeWaypoints
                    destination={destination}
                    apikey={GOOGLE_API}
                    strokeWidth={5}
                    strokeColor={colors.secondary}
                    onReady={systemOnReady}
                />

            </MapView>

            <HomeButtonMenuContainer style={{ top: top + 20 }}>
                <ButtonDrawer onPress={handleOpenDrawer}>
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
                <PickAndDrop pickUp={position.place} opened={opened} onPress={handleOpenResume} />
            </HomeBottomSpace>
        </HomeContainer>
    );
}
