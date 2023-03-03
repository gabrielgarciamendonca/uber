import styled from 'styled-components/native';

export const CountryItemContainer = styled.Pressable`
    border-radius: 16px;
    padding: 16px;
    margin-bottom: 12px;
    flex-direction: row;

    /* THEME */
    background-color:  ${props => props.theme.colors.tertiaryLight};
`;

export const CountryItemFlag = styled.Text`
    color: #FFFFFF;
    flex: 0.1;

`;

export const CountryItemCode = styled.Text`
    color: #FFFFFF;
    flex: 0.2;

    /* THEME */
    ${props => props.theme.fonts.medium}
`;

export const CountryItemName = styled.Text`
    color: #FFFFFF;
    text-align: left;
    flex: 0.7

    /* THEME */
    ${props => props.theme.fonts.medium}
`;