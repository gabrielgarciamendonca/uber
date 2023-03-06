import {
    useCallback,
    useEffect,
    useRef,
    useState
} from 'react';

import MapView from 'react-native-maps';
import { THome } from './types';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Geolocation from '@react-native-community/geolocation';
import { api } from '../../../services/api';
import { GOOGLE_API } from '@env';
import { useTheme } from 'styled-components/native';

const destination = { latitude: -23.6491, longitude: -46.7589 };

export function useHomeViewModel({ navigation }: THome) {
    const [opened, setOpened] = useState(false);
    const { colors } = useTheme()
    const mapRef = useRef<MapView>(null);
    const { top } = useSafeAreaInsets();
    const [position, setPosition] = useState({
        latitude: 0,
        longitude: 0,
        loaded: false,
        place: '',
    });

    useEffect(() => {
        Geolocation.getCurrentPosition(info => {
            api.position.get(`json?latlng=${info.coords.latitude}, ${info.coords.longitude}&key=${GOOGLE_API}`)
                .then(({ data }) => {
                    const results = data.results[0].address_components;
                    setTimeout(() => {
                        setPosition({
                            latitude: info.coords.latitude,
                            longitude: info.coords.longitude,
                            loaded: true,
                            place: `${results[1].long_name} ${results[0].long_name}, ${results[2].long_name}`
                        })
                    }, 3000);
                }).catch(_ => {
                    setPosition({
                        latitude: 0,
                        longitude: 0,
                        loaded: false,
                        place: ''
                    });
                })
        });

    }, []);

    const getCurrentLocation = useCallback(() => {
        if (position.loaded) {
            mapRef.current?.animateToRegion({
                latitude: position.latitude,
                longitude: position.longitude,
                latitudeDelta: 0,
                longitudeDelta: 0.01,
            })
        }
    }, [position, mapRef.current]);

    const handleOpenResume = useCallback(() => {
        if (opened) {
            navigation.navigate('PlaceManager', position);
        } else {
            setOpened(true);
        }
    }, [opened, position])

    const handleOpenDrawer = useCallback(navigation?.openDrawer, []);

    const systemOnReady = useCallback(() => {
        mapRef.current?.fitToCoordinates([{
            latitude: position.latitude,
            longitude: position.longitude
        }, destination], {
            animated: true, edgePadding: {
                bottom: 64,
                left: 32,
                right: 32,
                top: 64
            }
        })
    }, [mapRef.current])

    return {
        top,
        position,
        setOpened,
        mapRef,
        opened,
        getCurrentLocation,
        handleOpenResume,
        handleOpenDrawer,
        colors,
        destination,
        systemOnReady
    }

}
