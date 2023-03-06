import { DrawerScreenProps } from '@react-navigation/drawer';
import { TMainDrawer } from '../../../providers/Routes/Main/types';
import { useHomeViewModel } from './useHomeViewModel';

export type THome = DrawerScreenProps<TMainDrawer, 'Home'>;

export type THomeView = ReturnType<typeof useHomeViewModel>;