import styled from 'styled-components/native';

export const WelcomeContainer = styled.View`
  flex: 1;

  /* THEME */
  background-color: ${props => props.theme.colors.primary};
`;

export const WelcomeBanner = styled.View`
  flex: 0.8;
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
  background-color: #a100ff;
`;

export const WelcomeTitleBanner = styled.Text`
  /* THEME */
  ${props => props.theme.fonts.xLarge}
`;

export const WelcomeDescribeBanner = styled.Text``;

export const WelcomeCar = styled.Image``;
