import styled from 'styled-components/native';
import { ButtonDrawer } from '../../../components/ButtonDrawer';

export const MainContainer = styled.View`
  flex: 1;
  padding-bottom: 30px;
  padding: 30px;

  /* THEME */
  background-color: ${props => props.theme.colors.primary};
`;

export const DrawerIconContainer = styled.View`
  width: 40px;
  height: 40px;
  border-radius: 16px;
  justify-content: center;
  align-items: center;

  /* THEME */
  background-color: ${props => props.theme.colors.secondary};
`;

export const DrawerItems = styled.View`
  justify-content: space-evenly;
  flex: 1;
`;

export const DrawerItem = styled(ButtonDrawer)`
  width: 100%;
  flex-direction: row;
  align-items: center;
`;

export const DrawerItemTitle = styled.Text`
  margin-left: 24px;

  /* THEME */
  ${props => props.theme.fonts.medium2}
`;

export const DrawerIconItem = styled.Image`
  width: 18px;
  height: 18px;
`;

export const DrawerHeaderLine = styled.View`
  width: 100%;
  height: 2px;
  margin-top: 10px;

  /* THEME */
  background-color: ${props => props.theme.colors.secondaryLight};
`;

export const DrawerHeaderImageContainer = styled.View`
  padding: 5px;
  border-width: 2px;
  border-radius: 100px;
  justify-content: center;
  align-items: center;

  /* THEME */
  border-color: ${props => props.theme.colors.secondary};
`;

export const DrawerHeaderImage = styled.Image`
  width: 87px;
  height: 87px;
  border-radius: 50px;
`;

export const DrawerHeaderTitle = styled.Text`
  /* THEME */
  ${props => props.theme.fonts.medium2}

  font-weight: 700;
  margin-top: 20px;
  margin-bottom: 10px;
`;

export const DrawerHeaderEmail = styled.Text`
  /* THEME */
  ${props => props.theme.fonts.small}

  color: #707070;
`;

export const DrawerHeaderContainer = styled.View`
  width: 100%;
  padding: 10px 0px;
  padding-bottom: 40px;
  justify-content: center;
  align-items: center;
`;