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
import { useSnapshot } from "valtio";
import { location } from '../stories/location';

export function useHomeViewModel({ navigation }: THome) {
    const [count, setCount] = useState(0);
    const store = useSnapshot(location.store);
    const [opened, setOpened] = useState(false);
    const { colors } = useTheme()
    const mapRef = useRef<MapView>(null);
    const { top } = useSafeAreaInsets();

    useEffect(() => {
        Geolocation.getCurrentPosition(info => {
            api.position.get(`json?latlng=${info.coords.latitude}, ${info.coords.longitude}&key=${GOOGLE_API}`)
                .then(({ data }) => {
                    const results = data.results[0].address_components;
                    setTimeout(() => {
                        location.changeOrigin({
                            origin: {
                                latitude: info.coords.latitude,
                                longitude: info.coords.longitude,
                                loaded: true,
                                name: `${results[1].long_name} ${results[0].long_name}, ${results[2].long_name}`
                            }
                        });
                    }, 3000);
                }).catch(_ => {
                    location.changeOrigin({
                        origin: {
                            latitude: 0,
                            longitude: 0,
                            loaded: false,
                            name: ''
                        }
                    });
                });
        });
    }, []);


    const handleOpenResume = useCallback(() => {
        if (opened) {
            navigation.navigate('PlaceManager');
        } else {
            setOpened(true);
        }
    }, [opened, store.origin])

    const handleOpenDrawer = useCallback(navigation?.openDrawer, []);

    const systemOnReady = useCallback(() => {
        mapRef.current?.fitToCoordinates([store.origin, store.destination], {
            animated: true, edgePadding: {
                bottom: 64,
                left: 32,
                right: 32,
                top: 64
            }
        })
    }, [mapRef.current, store.origin, store.destination]);

    const getCurrentLocation = useCallback(() => {
        if (store.origin.loaded) {
            if (count % 2 === 0) {
                mapRef.current?.animateToRegion({
                    latitude: store.origin.latitude,
                    longitude: store.origin.longitude,
                    latitudeDelta: 0,
                    longitudeDelta: 0.01,
                });
            } else {
                systemOnReady();
            }
        }
        setCount(old => old + 1);
    }, [store.origin, mapRef.current, count, systemOnReady]);

    return {
        top,
        position: store.origin,
        setOpened,
        mapRef,
        opened,
        getCurrentLocation,
        handleOpenResume,
        handleOpenDrawer,
        colors,
        destination: store.destination,
        systemOnReady,
        isRouteSelected: store.origin.loaded && store.destination.loaded,
        isCarSelected: false
    }

}
