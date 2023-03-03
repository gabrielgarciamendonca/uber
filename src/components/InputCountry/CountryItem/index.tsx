import { CountryItemContainer, CountryItemFlag, CountryItemCode, CountryItemName } from './styles';
import { TCountryItem } from './types';

export function CountryItem({ name, item, onPress }: TCountryItem) {
    return (
        <CountryItemContainer onPress={onPress}>
            <CountryItemFlag>{item.flag}</CountryItemFlag>
            <CountryItemCode>{item.dial_code}</CountryItemCode>
            <CountryItemName>{name}</CountryItemName>
        </CountryItemContainer>
    )
}