import React from 'react';
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';

import {TTranslateY} from './types';

export function TranslateY({shared, children, from, where}: TTranslateY) {
  const style = useAnimatedStyle(
    () => ({
      transform: [
        {
          translateY: interpolate(
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
