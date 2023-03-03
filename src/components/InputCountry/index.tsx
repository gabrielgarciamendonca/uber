import { CountryPicker } from 'react-native-country-codes-picker';
import { CountryItem } from './CountryItem';
import { InputCountryContainer, InputCountryText } from './styles';
import { TInputCountry } from './types';
import { useInputCountryViewModel } from './useInputCountryViewModel';

export function InputCountry({ set, value, error }: TInputCountry) {
    const { colors, handleOpenModal, open, setOpen } = useInputCountryViewModel();
    return (
        <InputCountryContainer onPress={handleOpenModal} error={error}>

            <InputCountryText>{value}</InputCountryText>
            <CountryPicker
                lang='pt'
                onBackdropPress={() => setOpen(false)}
                show={open}
                inputPlaceholder="Select the country code"
                itemTemplate={CountryItem}
                style={{
                    line: {
                        backgroundColor: colors.tertiaryLight
                    },
                    modal: {
                        height: '60%',
                        backgroundColor: colors.tertiary
                    },
                }}
                pickerButtonOnPress={(item) => {
                    set(item.dial_code);
                    setOpen(false);
                }}
            />
        </InputCountryContainer>
    )
}