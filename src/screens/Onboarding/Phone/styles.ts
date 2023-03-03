import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const PhoneContainer = styled(SafeAreaView)`
  flex: 1;
  padding-bottom: 30px;
  padding: 30px;
  justify-content: space-between;

  /* THEME */
  background-color: ${props => props.theme.colors.primary};
`;

export const PhoneTitle = styled.Text`
  ${props => props.theme.fonts.medium};
`;

export const PhoneDescriptionBlue = styled.Text`
  /* THEME */
  ${props => props.theme.fonts.medium}

  color: ${props => props.theme.colors.secondaryLight};
  font-weight: 700;
`;

export const PhoneDescription = styled.Text`
  width: 60%;
  margin-top: 18px;

  /* THEME */
  ${props => props.theme.fonts.medium}
`;

export const PhoneInputContainer = styled.View``;

export const PhoneInputHorizontal = styled.View`
  flex-direction: row;
`;

export const PhoneContent = styled.Pressable`
  flex: 1;
`;