import React from 'react';
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';

import {TTranslateX} from './types';

export function TranslateX({shared, children, from, where}: TTranslateX) {
  const style = useAnimatedStyle(
    () => ({
      transform: [
        {
          translateX: interpolate(
            shared.value,
            [0, 1],
            [from, where],
            Extrapolation.CLAMP,
          ),
        },
      ],
    }),
    [from, where],
  );

  return <Animated.View style={style}>{children}</Animated.View>;
}
