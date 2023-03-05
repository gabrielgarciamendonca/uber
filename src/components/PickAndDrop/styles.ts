import Animated from 'react-native-reanimated';
import { Pressable } from 'react-native'
import styled from 'styled-components/native';
import ReText from '../ReText';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export const PickAndDropContainer = styled(AnimatedPressable)`
  border-radius: 20px;
  padding: 30px 20px;

  /* THEME */
  background-color: ${props => props.theme.colors.tertiaryOpacity};
`;

export const PickAndDropItem = styled(Animated.View)`
    flex-direction: row;
`

export const PickAndDropTitle = styled.Text`
    /* THEME */
    ${props => props.theme.fonts.small}

    color: #707070;
`

export const PickAndDropReTitle = styled(ReText)`
    /* THEME */
    ${props => props.theme.fonts.small}

    margin: 0px;
    padding: 0px;
    color: #707070;
`

export const PickAndDropDescription = styled.Text`
    /* THEME */
    ${props => props.theme.fonts.medium}
`

export const PickAndDropLine = styled.View`
    height: 1px;
    margin: 24px 0px;
    width: 100%;

    /* THEME */
    background-color: ${props => props.theme.colors.secondaryLight}7F;
`;

export const PickAndDropUpPoint = styled.View`
    width: 10px;
    height: 10px;
    border-radius: 5px;
    margin-top: 2px;

    /* THEME */
    background-color: ${props => props.theme.colors.secondaryLight};
`;

export const PickAndDropDropPoint = styled.View`
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: #70B200;
    margin-top: 2px;
`;

export const PickAndDropLabels = styled.View`
    margin-left: 10px;
    margin-right: 40px;
    flex: 1;
`;