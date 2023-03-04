import React from 'react';
import { StatusBar } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { HomeButtonImage, HomeButtonMenuContainer, HomeContainer } from './styles';
import mapStyle from '../../../assets/maps/style.json'
import { ButtonDrawer } from '../../../components/ButtonDrawer';
import { THome } from './types';

export function Home({ navigation }: THome) {
  return (
    <HomeContainer>
      <StatusBar hidden />

      <MapView
        style={{ flex: 1 }}
        customMapStyle={mapStyle}
        provider={PROVIDER_GOOGLE}
        showsBuildings={false}
        minZoomLevel={14}
        showsCompass={false}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
      <HomeButtonMenuContainer>
        <ButtonDrawer onPress={() => navigation?.openDrawer()}>
          <HomeButtonImage source={require('../../../assets/icons/menu.png')} />
        </ButtonDrawer>
      </HomeButtonMenuContainer>
    </HomeContainer>
  );
}
