import { GOOGLE_API } from '@env';
import { useCallback, useEffect, useRef, useState } from 'react';
import { TextInput } from 'react-native';
import { debounce } from '../../../functions/debounce';
import { api } from '../../../services/api';
import { location } from '../stories/location';
import { useSnapshot } from "valtio";
import { TPlaceManager, TPlaceManagerOptions } from './types';

export function usePlaceManagerViewModel({ route, navigation }: TPlaceManager) {
    const { destination, origin } = useSnapshot(location.store);
    const [pickUp, setPickUp] = useState(origin.name);
    const pickUpRef = useRef<TextInput>(null);
    const [dropOff, setDropOff] = useState('');
    const dropOffRef = useRef<TextInput>(null);

    const [options, setOptions] = useState<{
        dropOff: TPlaceManagerOptions[],
        pickUp: TPlaceManagerOptions[],
    }>({
        dropOff: [],
        pickUp: []
    });


    const handleFocus = useCallback((type: 'dropOff' | 'pickUp') => {
        if (type === 'dropOff') {
            dropOffRef.current?.focus();
        }
        if (type === 'pickUp') {
            pickUpRef.current?.focus();
        }
    }, [pickUpRef, dropOffRef])

    const handlerPickUp = useCallback(
        debounce(async (e) => {
            const format = e?.replace('R. ', 'Rua')
            if (!e) {
                return;
            }
            const { data } = await api.name.get(`json?address=${format}&key=${GOOGLE_API}`);
            setOptions(old => ({
                ...old,
                pickUp: data.results
            }))
        }, 2000),
        [options]
    );

    const handlerDropOff = useCallback(
        debounce(async (e) => {
            const format = e?.replace('R. ', 'Rua')
            if (!e) {
                return;
            }
            const { data } = await api.name.get(`json?address=${format}&key=${GOOGLE_API}`);
            setOptions(old => ({
                ...old,
                dropOff: data.results
            }))
        }, 2000),
        [options]
    );

    const handleSelectOption = useCallback((option: TPlaceManagerOptions, type: 'dropOff' | 'pickUp') => {
        if (type === 'dropOff') {
            location.changeDestination({
                destination: {
                    latitude: option.geometry.location.lat,
                    longitude: option.geometry.location.lng,
                    loaded: true,
                    name: option.formatted_address
                }
            })
            setDropOff(option.formatted_address)
        }
        if (type === 'pickUp') {
            location.changeOrigin({
                origin: {
                    latitude: option.geometry.location.lat,
                    longitude: option.geometry.location.lng,
                    loaded: true,
                    name: option.formatted_address
                }
            })
            setPickUp(option.formatted_address)
        }
        setOptions(old => ({
            ...old,
            [type]: []
        }));
    }, [options]);

    const handleNavigate = useCallback(() => {
        navigation.navigate('Home');
    }, [])


    return {
        handleFocus,
        handlerPickUp,
        handlerDropOff,
        pickUpRef,
        pickUp,
        dropOff,
        dropOffRef,
        options,
        handleSelectOption,
        handleNavigate,
        error: !(destination.loaded && origin.loaded)
    }
}
