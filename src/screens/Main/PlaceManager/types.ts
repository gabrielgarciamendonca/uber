import { DrawerScreenProps } from '@react-navigation/drawer';
import { RouteProp } from '@react-navigation/native';
import { TMainDrawer } from '../../../providers/Routes/Main/types';

export type TPlaceManager = DrawerScreenProps<TMainDrawer, 'PlaceManager'>;

export type TPlaceManagerRoute = RouteProp<TMainDrawer, 'PlaceManager'>;

export type TPlaceManagerOptions = {
    address_components: {
        long_name: string;
        geometry: {
            location: {
                lat: number;
                lng: number;
            }
        }
    }[]
}