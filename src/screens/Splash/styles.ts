import styled from 'styled-components/native';

export const SplashContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  /* THEME */
  background-color: ${props => props.theme.colors.primary};
`;

export const LottieContainer = styled.View`
  width: 50%;
  flex: 1;
`;
