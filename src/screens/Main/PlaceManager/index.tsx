import React from 'react';
import { PlaceManagerContainer, PlaceManagerButtonImage, PlaceManagerButtonMenuContainer } from './styles';
import { ButtonDrawer } from '../../../components/ButtonDrawer';
import { TPlaceManager } from './types';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export function PlaceManager({ navigation }: TPlaceManager) {
  const { top } = useSafeAreaInsets()

  return (
    <PlaceManagerContainer>
      <PlaceManagerButtonMenuContainer style={{ top: top + 20 }}>
        <ButtonDrawer onPress={() => navigation?.openDrawer()}>
          <PlaceManagerButtonImage source={require('../../../assets/icons/menu.png')} />
        </ButtonDrawer>
      </PlaceManagerButtonMenuContainer>

    </PlaceManagerContainer>
  );
}
