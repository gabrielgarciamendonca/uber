import { Pressable } from 'react-native';
import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export const ButtonDrawerContainer = styled(AnimatedPressable)`
  flex-direction: row;
  align-items: center;
`;
