import {SafeAreaView} from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const ConfirmationContainer = styled(SafeAreaView)`
  flex: 1;
  justify-content: space-between;
  padding-bottom: 30px;
  padding: 30px;

  /* THEME */
  background-color: ${props => props.theme.colors.primary};
`;

export const ConfirmationTitleContainer = styled.View``;

export const ConfirmationTitle = styled.Text`
  ${props => props.theme.fonts.medium};
`;
