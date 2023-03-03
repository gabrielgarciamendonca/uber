import { Pressable } from 'react-native';
import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';
import { RNHoleView } from 'react-native-hole-view';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export const ButtonContainer = styled(AnimatedPressable)`

  border-radius: 16px;
`;

export const ButtonOpacityCircle = styled(Animated.View)`
  opacity: 0.1;
  background-color: #000;
  width: 100px;
  height: 100px;
  border-radius: 50px;
  position: absolute;
`;

export const ButtonContent = styled(RNHoleView)`
  justify-content: center;
  align-items: center;
  padding: 18px;
`;

export const ButtonTitle = styled.Text`
  /* THEME */
  ${props => props.theme.fonts.medium}
`;
