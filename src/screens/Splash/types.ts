import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {TStack} from '../../providers/Routes/types';

export type TSplash = NativeStackNavigationProp<TStack, 'Splash'>;
export type TRouteSplash = RouteProp<TStack, 'Splash'>;
