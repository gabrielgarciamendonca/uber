import styled from 'styled-components/native';
import MaskInput from 'react-native-mask-input';

export const InputContainer = styled(MaskInput)<{error?: string}>`
  border-bottom-width: 1px;
  border-bottom-color: ${props => {
    if (props.error) {
      return props.theme.colors.error;
    }
    return props.theme.colors.secondary;
  }};
  flex: 1;
  color: #fff;
`;
