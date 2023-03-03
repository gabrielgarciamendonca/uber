import { useNavigation, useRoute } from '@react-navigation/native';
import { useEffect } from 'react';

import { TRouteSplash, TSplash } from './types';

export function useSplashViewModel() {
    const { navigate } = useNavigation<TSplash>();
    const { params } = useRoute<TRouteSplash>();

    useEffect(() => {
        setTimeout(() => {
            console.log(`[UBER] ready ✅ ${params.isReady}`);
            navigate('Welcome');
        }, 1000);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

}