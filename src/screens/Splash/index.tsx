import React, { useEffect } from "react";

import { LottieContainer, SplashContainer } from "./styles";
import Lottie from 'lottie-react-native';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { TStack } from "../../providers/Routes/types";
import { useNavigation } from "@react-navigation/native";

type TSplash = NativeStackNavigationProp<TStack, 'Splash'>;

export function Splash() {
    const { navigate } = useNavigation<TSplash>()

    useEffect(() => {
        setTimeout(() => navigate('Welcome'), 3000)
    }, [])

    return (
        <SplashContainer>
            <LottieContainer>
                <Lottie source={require('../../assets/lotties/splash.json')} autoPlay loop colorFilters={[{ color: '#FFF', keypath: 'Stroke 1' }]} />
            </LottieContainer>
        </SplashContainer>
    )
}