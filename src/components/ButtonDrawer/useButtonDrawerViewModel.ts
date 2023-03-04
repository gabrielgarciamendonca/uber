import { useCallback } from 'react';
import { GestureResponderEvent } from 'react-native';
import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { TButtonDrawer } from './types';

export function useButtonDrawerViewModel({ ...rest }: Omit<TButtonDrawer, 'title'>) {
  const shared = useSharedValue(1);


  const onPressIn = useCallback((event: GestureResponderEvent) => {
    shared.value = withTiming(0.95, { duration: 50 });

    rest?.onPressIn && rest.onPressIn(event);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onPressOut = useCallback((event: GestureResponderEvent) => {
    shared.value = withTiming(1, { duration: 50 });

    rest?.onPressOut && rest.onPressOut(event);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const style = useAnimatedStyle(
    () => ({
      transform: [
        {
          scale: shared.value,
        },
      ],
    }),
    [],
  );


  return {
    style,
    onPressIn,
    onPressOut,
  };
}
