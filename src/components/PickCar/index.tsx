import React from 'react';
import { Extrapolation, interpolate, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { ImageSourcePropType, PressableProps } from 'react-native/types';
import { TType } from '../../types/types';

import {
    PickCarContainer, PickCarItem, PickCarItemImage, PickCarItemTitle
} from "./styles";
import { TItem, TPickCar } from './types';

function Item({ isSelected, img, title, ...rest }: TItem) {
    const shared = useSharedValue(1);

    React.useEffect(() => {
        shared.value = withTiming(isSelected ? 1.05 : 1, { duration: 300 });
    }, [isSelected])

    const styleTransform = useAnimatedStyle(() => ({
        transform: [{ scale: shared.value }]
    }), []);

    const styleBottom = useAnimatedStyle(() => ({
        marginBottom: interpolate(shared.value, [1, 1.1], [25, 45], Extrapolation.CLAMP)
    }), []);

    return <PickCarItem {...rest} style={styleTransform}>
        <PickCarItemImage style={styleBottom} source={img} />
        <PickCarItemTitle>{title}</PickCarItemTitle>
    </PickCarItem>
}

export function PickCar({handleSelect, selected}: TPickCar) {
    // const [selected, setSelected] = React.useState<TType>('none');

    const handleSelectItem = React.useCallback((item: TType) => {
        handleSelect(item)
    }, [])

    return (
        <PickCarContainer>
            <Item
                onPress={() => handleSelectItem('economy')}
                isSelected={selected === 'economy'}
                img={require('../../assets/icons/car1.png')}
                title="economy"
            />
            <Item
                onPress={() => handleSelectItem('luxury')}
                isSelected={selected === 'luxury'}
                img={require('../../assets/icons/car2.png')}
                title="luxury"
            />
            <Item
                onPress={() => handleSelectItem('family')}
                isSelected={selected === 'family'}
                img={require('../../assets/icons/car3.png')}
                title="family"
            />
        </PickCarContainer>
    )
}