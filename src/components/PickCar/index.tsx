import React from 'react';
import { Extrapolation, interpolate, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { ImageSourcePropType, PressableProps } from 'react-native/types';
import { TType } from '../../types/types';

import {
    PickCarContainer, PickCarItem, PickCarItemImage
} from "./styles";

function Item({ isSelected, img, ...rest }: { isSelected?: boolean, img: ImageSourcePropType } & PressableProps) {
    const shared = useSharedValue(1);

    React.useEffect(() => {
        shared.value = withTiming(isSelected ? 1.1 : 1, { duration: 300 });
    }, [isSelected])

    const styleTransform = useAnimatedStyle(() => ({
        transform: [{ scale: shared.value }]
    }), []);

    const styleBottom = useAnimatedStyle(() => ({
        marginBottom: interpolate(shared.value, [1, 1.1], [25, 45], Extrapolation.CLAMP)
    }), []);

    return <PickCarItem {...rest} style={styleTransform}>
        <PickCarItemImage style={styleBottom} source={img} />
    </PickCarItem>
}

export function PickCar() {
    const [selected, setSelected] = React.useState<TType>('none');

    const handleSelectItem = React.useCallback((item: TType) => {
        setSelected(item)
    }, [])

    return (
        <PickCarContainer>
            <Item
                onPress={() => handleSelectItem('economy')}
                isSelected={selected === 'economy'}
                img={require('../../assets/icons/car1.png')}
            />
            <Item
                onPress={() => handleSelectItem('luxury')}
                isSelected={selected === 'luxury'}
                img={require('../../assets/icons/car2.png')}
            />
            <Item
                onPress={() => handleSelectItem('family')}
                isSelected={selected === 'family'}
                img={require('../../assets/icons/car3.png')}
            />
        </PickCarContainer>
    )
}