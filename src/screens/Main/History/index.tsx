import React from 'react';
import { StatusBar } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { HistoryContainer, HomeButtonImage, HomeButtonMenuContainer } from './styles';
import mapStyle from '../../../assets/maps/style.json'
import { useTheme } from 'styled-components/native';
import { ButtonDrawer } from '../../../components/ButtonDrawer';
import { THistory } from './types';

export function History({ navigation }: THistory) {
  const { colors } = useTheme()

  return (
    <HistoryContainer>
      <StatusBar
        animated
        backgroundColor={colors.primary}
        translucent
      />

      <HomeButtonMenuContainer>
        <ButtonDrawer onPress={() => navigation?.openDrawer()}>
          <HomeButtonImage source={require('../../../assets/icons/menu.png')} />
        </ButtonDrawer>
      </HomeButtonMenuContainer>

    </HistoryContainer>
  );
}
