import { useCallback, useEffect, useState } from "react";
import { Extrapolation, interpolate, useAnimatedStyle, useDerivedValue, useSharedValue, withRepeat, withTiming } from "react-native-reanimated";
import { LayoutChangeEvent } from "react-native/types";
import {
    PickAndDropContainer,
    PickAndDropDescription,
    PickAndDropDropPoint,
    PickAndDropItem,
    PickAndDropLabels,
    PickAndDropLine,
    PickAndDropReTitle,
    PickAndDropTitle,
    PickAndDropUpPoint
} from "./styles";
import { TPickAndDrop } from "./types";


export function PickAndDrop({ pickUp, opened, ...rest }: TPickAndDrop) {
    const shared = useSharedValue(0);
    const loadingShared = useSharedValue(0);
    const [averageHeight, setAverageHeight] = useState({
        item: 0,
        container: 0,
        loaded: false,
    });

    useEffect(() => {
        loadingShared.value = withRepeat(withTiming(30, { duration: 2000 }), 30, false)
    }, [])

    const derivedText = useDerivedValue(() => {
        const value = loadingShared.value / 10;

        return opened ? 'DROP OFF' : `From : ${pickUp ? pickUp : '.'.repeat(parseInt(value.toFixed(0)))}`
    })

    useEffect(() => {
        shared.value = withTiming(opened ? 1 : 0, { duration: 300 })
    }, [opened]);

    const styleHeight = useAnimatedStyle(() => ({
        height: interpolate(shared.value, [0, 1], [averageHeight.container, averageHeight.container + averageHeight.item], Extrapolation.CLAMP),
    }), [averageHeight, shared])

    const styleOpacity = useAnimatedStyle(() => ({
        opacity: shared.value
    }), [shared])

    const systemGetHeight = useCallback((e: LayoutChangeEvent, name: 'item' | 'container') => {
        if (name === 'container' && averageHeight.container === 0) {
            e.persist();
            setAverageHeight(old => ({ ...old, container: e.nativeEvent?.layout?.height, loaded: true }));
        }
        if (name === 'item' && averageHeight.item === 0) {
            //THE 49 IS THE PickAndDropLine TOTAL HEIGHT
            setAverageHeight(old => ({ ...old, item: e.nativeEvent?.layout?.height + 49 }));
        }

    }, [averageHeight]);

    return (
        <PickAndDropContainer {...rest} style={averageHeight.loaded && styleHeight} onLayout={(e) => systemGetHeight(e, 'container')}>
            {opened &&
                <PickAndDropItem style={styleOpacity}>
                    <PickAndDropUpPoint />
                    <PickAndDropLabels>
                        <PickAndDropTitle>PICK UP</PickAndDropTitle>
                        <PickAndDropDescription numberOfLines={1}>{pickUp}</PickAndDropDescription>
                        <PickAndDropLine />
                    </PickAndDropLabels>
                </PickAndDropItem>}

            <PickAndDropItem onLayout={(e) => systemGetHeight(e, 'item')}>
                <PickAndDropDropPoint />
                <PickAndDropLabels>
                    <PickAndDropReTitle numberOfLines={1} text={derivedText} style={{ textAlignVertical: 'top' }} />
                    <PickAndDropDescription>Where to?</PickAndDropDescription>
                </PickAndDropLabels>
            </PickAndDropItem>
        </PickAndDropContainer>
    )
}