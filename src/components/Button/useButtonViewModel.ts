import { useCallback, useEffect } from 'react';
import { GestureResponderEvent } from 'react-native';
import {
    Extrapolation,
    interpolateColor,
    useAnimatedStyle,
    useSharedValue,
    withTiming,
} from 'react-native-reanimated';
import { useTheme } from 'styled-components/native';
import { TButton } from './types';


export function useButtonViewModel({ error, ...rest }: Omit<TButton, 'title'>) {
    const shared = useSharedValue(1);
    const sharedOpacity = useSharedValue({ x: 0, y: 0 });
    const sharedScale = useSharedValue(0);
    const sharedDisabled = useSharedValue(0);
    const { colors } = useTheme();

    useEffect(() => {
        if (error) {
            sharedDisabled.value = withTiming(1, { duration: 500 })
        } else {
            sharedDisabled.value = withTiming(0, { duration: 500 })
        }
    }, [error])

    const onPressIn = useCallback((event: GestureResponderEvent) => {
        sharedOpacity.value = {
            x: event.nativeEvent.locationX,
            y: event.nativeEvent.locationY,
        };

        shared.value = withTiming(0.95, { duration: 50 });

        sharedScale.value = withTiming(10, { duration: 500 }, finished => {
            if (finished) {
                sharedScale.value = 0;
            }
        });

        rest?.onPressIn && rest.onPressIn(event);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const onPressOut = useCallback((event: GestureResponderEvent) => {
        shared.value = withTiming(1, { duration: 50 });

        rest?.onPressOut && rest.onPressOut(event);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const style = useAnimatedStyle(
        () => ({
            transform: [
                {
                    scale: shared.value,
                },
            ],
        }),
        [],
    );

    const styleOpacity = useAnimatedStyle(
        () => ({
            transform: [
                {
                    scale: sharedScale.value,
                },
            ],
            left: sharedOpacity.value.x - 50,
            top: sharedOpacity.value.y - 50,
        }),
        [sharedOpacity.value, sharedScale.value],
    );

    const styleDisabled = useAnimatedStyle(
        () => ({
            backgroundColor: interpolateColor(sharedDisabled.value, [0, 1], [colors.secondary, colors.disabled])
        }),
        [sharedDisabled.value],
    );

    return {
        style,
        styleOpacity,
        onPressIn,
        onPressOut,
        styleDisabled
    }
}