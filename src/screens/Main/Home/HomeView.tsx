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
import { PickCar } from '../../../components/PickCar';
import { Button } from '../../../components/Button';


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
    systemOnReady,
    isRouteSelected,
    isCarSelected
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
                minZoomLevel={5}
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
                {
                    isRouteSelected && isCarSelected && (
                        <>
                            <Marker
                                tappable={false}
                                coordinate={destination}
                            >
                                <Image style={{ width: 28, resizeMode: 'contain' }} source={require('../../../assets/icons/map-ping.png')} />
                            </Marker>
                            <MapViewDirections
                                origin={position}
                                mode='DRIVING'
                                precision='high'
                                optimizeWaypoints
                                destination={destination}
                                apikey={GOOGLE_API}
                                strokeWidth={5}
                                strokeColor={colors.secondary}
                                onReady={systemOnReady}
                            />
                        </>)
                }
            </MapView>

            <HomeButtonMenuContainer style={{ top: top + 20 }}>
                <ButtonDrawer onPress={handleOpenDrawer}>
                    <HomeButtonImage source={require('../../../assets/icons/menu.png')} />
                </ButtonDrawer>
            </HomeButtonMenuContainer>

            {<HomeBottomSpace>
                {!opened &&
                    <HomeButtonCurrentLocationContainer>
                        <ButtonDrawer onPress={getCurrentLocation}>
                            <HomeCurrentLocationImage source={require('../../../assets/icons/current-location.png')} />
                        </ButtonDrawer>
                    </HomeButtonCurrentLocationContainer>
                }
                {!isRouteSelected && <PickAndDrop pickUp={position.name} dropOff={destination.name} opened={opened} onPress={handleOpenResume} />}
                {isRouteSelected && <>
                    <PickCar />
                    <Button title='Send Request' />
                </>}
            </HomeBottomSpace>}
        </HomeContainer>
    );
}
