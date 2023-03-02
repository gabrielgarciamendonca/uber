import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const OnboardingContainer = styled(SafeAreaView)`
  flex: 1;
  justify-content: space-between;
  padding-bottom: 30px;

  /* THEME */
  background-color: ${props => props.theme.colors.primary};
`;