import styled from 'styled-components/native';

export const InputCountryContainer = styled.Pressable<{error?: string}>`
  border-bottom-width: 1px;
  justify-content: center;
  padding-left: 16px;
  padding-right: 8px;
  margin-right: 16px;

  /* THEME */
  border-bottom-color: ${props => {
    if (props.error) {
      return props.theme.colors.error;
    }
    return props.theme.colors.secondary;
  }};
`;

export const InputCountryText = styled.Text`
  color: #ffffff;
`;
