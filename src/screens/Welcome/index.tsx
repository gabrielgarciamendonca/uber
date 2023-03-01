import React from "react";

import { StatusBar } from 'react-native'
import { ThemeProvider } from "styled-components/native";
import { theme } from "../../global/theme";
import { WelcomeContainer, WelcomeTitle } from "./styles";

export function Welcome() {
    return (
        <ThemeProvider theme={theme.dark}>
            <StatusBar backgroundColor={theme.dark.colors.primary} />
            <WelcomeContainer>
                <WelcomeTitle>UBER</WelcomeTitle>
            </WelcomeContainer>
        </ThemeProvider>

    )
}