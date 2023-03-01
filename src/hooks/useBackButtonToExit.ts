import React from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {BackHandler} from 'react-native';

export function useBackButtonToExit() {
  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        BackHandler.exitApp();
        return true;
      };

      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () =>
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, []),
  );
}
