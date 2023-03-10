import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const HistoryContainer = styled(SafeAreaView)`
  flex: 1;
  justify-content: space-between;

  /* THEME */
  background-color: ${props => props.theme.colors.primary};
`;

export const HomeButtonMenuContainer = styled.View`
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  position: absolute;
  top: 20px;
  left: 20px;

  /* THEME */
  background-color: ${props => props.theme.colors.secondary};
`;

export const HomeButtonImage = styled.Image`
  width: 24px;
  height: 24px;
  margin: 8px;
`;