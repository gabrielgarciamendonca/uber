import styled from 'styled-components/native';

export const WelcomeContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  /* THEME */
  background-color: ${props => props.theme.colors.primary};
`;

export const WelcomeTitle = styled.Text`
  /* THEME */
  ${props => props.theme.fonts.xLarge}
`;
