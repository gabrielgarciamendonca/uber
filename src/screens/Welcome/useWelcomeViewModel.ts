import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {useCallback, useEffect, useState} from 'react';
import {useSharedValue, withTiming} from 'react-native-reanimated';
import {useTheme} from 'styled-components/native';
import {useBackButtonToExit} from '../../hooks/useBackButtonToExit';

import {TWelcome, TWelcomeView} from './types';

export function useWelcomeViewModel(): TWelcomeView {
  useBackButtonToExit();
  const theme = useTheme();
  const {navigate} = useNavigation<TWelcome>();
  const shared = useSharedValue(0);
  const [hideStatusBarConfig, setHideStatusBarConfig] = useState(false);

  useEffect(() => {
    shared.value = withTiming(1, {duration: 1000});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleContinue = useCallback(() => {
    navigate('Onboarding');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useFocusEffect(
    useCallback(() => {
      setHideStatusBarConfig(false);

      return () => setHideStatusBarConfig(true);
    }, []),
  );

  return {
    theme,
    hideStatusBarConfig,
    handleContinue,
    shared,
  };
}
