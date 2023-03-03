import styled from 'styled-components/native';

export const InputCharContainer = styled.TextInput`
  border-radius: 16px;
  padding: 16px;
  font-size: 32px;
  text-align: center;
  color: #fff;

  /* THEME */
  background-color: ${props => props.theme.colors.tertiary};
`;
