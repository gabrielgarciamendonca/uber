import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const HomeContainer = styled(SafeAreaView)`
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

export const HomeButtonCurrentLocationContainer = styled.View`
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  width: 40px;
  height: 40px;
  align-self: flex-end;
  margin-bottom: 20px;

  /* THEME */
  background-color: ${props => props.theme.colors.secondary};
`;

export const HomeButtonImage = styled.Image`
  width: 24px;
  height: 24px;
  margin: 8px;
`;

export const HomeCurrentLocationImage = styled.Image`
  width: 22px;
  height: 22px;
  margin: 9px;
`;

export const HomeBottomSpace = styled.View`
  position: absolute;
  bottom: 20px;
  left: 20px;
  right: 20px;
`;

