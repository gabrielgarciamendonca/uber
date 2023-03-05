import React from 'react';
import 'react-native-gesture-handler';

import { TMainDrawer } from './types';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Home } from '../../../screens/Main/Home';
import { useWindowDimensions } from 'react-native';
import { MainView } from './MainView';
import { History } from '../../../screens/Main/History';
import { PlaceManager } from '../../../screens/Main/PlaceManager';

const MainDrawer = createDrawerNavigator<TMainDrawer>();

export function Main() {
  const { width } = useWindowDimensions();

  return (
    <MainDrawer.Navigator
      initialRouteName='Home'
      drawerContent={MainView}
      screenOptions={{
        headerShown: false,
        swipeEnabled: false,
        drawerStyle: { width: width * 0.8 },
      }}
    >
      <MainDrawer.Screen
        name="Home"
        component={Home}
      />
      <MainDrawer.Screen
        name="History"
        component={History}
      />
      <MainDrawer.Screen
        name="PlaceManager"
        component={PlaceManager}
      />
    </MainDrawer.Navigator>
  );
}
