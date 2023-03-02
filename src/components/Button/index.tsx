import React, { useCallback } from 'react';
import { GestureResponderEvent } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

import { ButtonContainer, ButtonTitle, ButtonContent, ButtonOpacityCircle } from './styles';
import { TButton } from './types';

export function Button({ title, ...rest }: TButton) {
    const shared = useSharedValue(1);
    const sharedOpacity = useSharedValue({ x: 0, y: 0 });
    const sharedScale = useSharedValue(0);

    const onPressIn = useCallback((event: GestureResponderEvent) => {
        sharedOpacity.value = {
            x: event.nativeEvent.locationX,
            y: event.nativeEvent.locationY
        };

        shared.value = withTiming(0.95, { duration: 50 });

        sharedScale.value = withTiming(10, { duration: 500 }, (finished) => {
            if (finished) {
                sharedScale.value = 0;
            }
        });

        rest?.onPressIn && rest.onPressIn(event);
    }, []);

    const onPressOut = useCallback((event: GestureResponderEvent) => {
        shared.value = withTiming(1, { duration: 50 });

        rest?.onPressOut && rest.onPressOut(event);
    }, []);

    const style = useAnimatedStyle(() => ({
        transform: [{
            scale: shared.value,
        }],
    }), []);

    const styleOpacity = useAnimatedStyle(() => ({
        transform: [{
            scale: sharedScale.value
        }],
        left: sharedOpacity.value.x - 50,
        top: sharedOpacity.value.y - 50,

    }), [sharedOpacity.value, sharedScale.value])

    return (
        <ButtonContainer {...rest} style={style} onPressIn={onPressIn} onPressOut={onPressOut}>
            <ButtonContent>
                <ButtonOpacityCircle style={styleOpacity} />
                <ButtonTitle>{title}</ButtonTitle>
            </ButtonContent>
        </ButtonContainer>
    );
}
