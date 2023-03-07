import { DrawerScreenProps } from '@react-navigation/drawer';
import { RouteProp } from '@react-navigation/native';
import { TMainDrawer } from '../../../providers/Routes/Main/types';
import { usePlaceManagerViewModel } from './usePlaceManagerViewModel';

export type TPlaceManager = DrawerScreenProps<TMainDrawer, 'PlaceManager'>;

export type TPlaceManagerRoute = RouteProp<TMainDrawer, 'PlaceManager'>;

export type TPlaceManagerOptions = {
    formatted_address: string;
    geometry: {
        location: {
            lat: number;
            lng: number;
        }
    }
}

export type TPlaceManagerView = ReturnType<typeof usePlaceManagerViewModel>;