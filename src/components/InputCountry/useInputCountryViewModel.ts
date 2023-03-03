import { useCallback, useState } from "react";
import { useTheme } from "styled-components/native";



export function useInputCountryViewModel() {
    const { colors } = useTheme()

    const [open, setOpen] = useState(false);

    const handleOpenModal = useCallback(() => {
        setOpen(true);
    }, [])
    return {
        colors,
        open,
        handleOpenModal,
        setOpen
    }
}