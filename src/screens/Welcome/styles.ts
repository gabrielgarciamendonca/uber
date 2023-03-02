import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const WelcomeContainer = styled(SafeAreaView)`
  flex: 1;
  justify-content: space-between;
  padding-bottom: 30px;

  /* THEME */
  background-color: ${props => props.theme.colors.primary};
`;

export const WelcomeBanner = styled.View`
  flex: 0.85;
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
  background-color: ${props => props.theme.colors.secondary};
  justify-content: space-evenly;
`;

export const WelcomeLabels = styled.View`
  align-items: center;
`;

export const WelcomeTitleBanner = styled.Text`

  /* THEME */
  ${props => props.theme.fonts.xLarge}
`;

export const WelcomeDescribeBanner = styled.Text`
  /* THEME */
  ${props => props.theme.fonts.largeMedium}
`;

export const WelcomeCar = styled.Image`
  width: 100%;
`;
