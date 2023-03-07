import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const PlaceManagerContainer = styled(SafeAreaView)`
  flex: 1;
  padding: 20px;
  padding: 20px;

  /* THEME */
  background-color: ${props => props.theme.colors.primary};
`;

export const PlaceManagerButtonMenuContainer = styled.View`
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  position: absolute;
  top: 20px;
  left: 20px;

  /* THEME */
  background-color: ${props => props.theme.colors.secondary};
`;

export const PlaceManagerButtonImage = styled.Image`
  width: 24px;
  height: 24px;
  margin: 8px;
`;

export const PlaceManagerTopContent = styled.View`
  border-radius: 20px;
  padding: 30px 20px;
  margin-bottom: 20px;

  /* THEME */
  background-color: ${props => props.theme.colors.tertiaryOpacity};
`;

export const PlaceManagerItem = styled.Pressable`
    flex-direction: row;
`

export const PlaceManagerTitle = styled.Text`
    /* THEME */
    ${props => props.theme.fonts.small}

    color: #707070;
`

export const PlaceManagerUpPoint = styled.View`
    width: 10px;
    height: 10px;
    border-radius: 5px;
    margin-top: 2px;

    /* THEME */
    background-color: ${props => props.theme.colors.secondaryLight};
`;

export const PlaceManagerLine = styled.View`
    height: 1px;
    margin: 24px 0px;
    width: 100%;

    /* THEME */
    background-color: ${props => props.theme.colors.secondaryLight}7F;
`;

export const PlaceManagerInput = styled.TextInput`
    /* THEME */
    ${props => props.theme.fonts.medium}

    margin: 0px;
    padding: 0px;
    line-height: 14px;
`

export const PlaceManagerLabels = styled.View`
    margin-left: 10px;
    margin-right: 40px;
    flex: 1;
`;

export const PlaceManagerDropPoint = styled.View`
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: #70B200;
    margin-top: 2px;
`;

export const PlaceManagerOptionsItem = styled.Pressable`
  border-radius: 20px;
  padding: 20px;
  margin-top: 10px;

  /* THEME */
  background-color: ${props => props.theme.colors.tertiaryOpacity};
`

export const PlaceManagerOptionsTitle = styled.Text`
  /* THEME */
  ${props => props.theme.fonts.medium}
`

export const PlaceManagerSearchTitle = styled.Text`
  margin-top: 20px;
  margin-bottom: 10px

  /* THEME */
  ${props => props.theme.fonts.medium2}
`;
