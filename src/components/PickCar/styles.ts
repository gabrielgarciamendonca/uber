import Animated from 'react-native-reanimated';
import { Pressable, Image } from 'react-native';
import styled from 'styled-components/native';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
const AnimatedImage = Animated.createAnimatedComponent(Image);

export const PickCarContainer = styled.View`
  border-radius: 20px;
  padding: 20px;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;

  /* THEME */
  background-color: ${props => props.theme.colors.tertiaryOpacity};
`;

export const PickCarItem = styled(AnimatedPressable)`
    width: 75px;
    height: 75px;
    border-radius: 13px;
    background-color: ${props => props.theme.colors.secondary};
    justify-content: center;
    align-items: center;
`;

export const PickCarItemImage = styled(AnimatedImage)`
    width: 85px;
    height: 85px;
    margin-bottom: 25px;
`;