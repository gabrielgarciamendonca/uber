import { proxy } from "valtio";
import { TLocation } from "./types";

const store = proxy<TLocation>({
    destination: {
        latitude: 0,
        longitude: 0,
        loaded: false,
        name: ''
    },
    origin: {
        latitude: 0,
        longitude: 0,
        loaded: false,
        name: ''
    },
});

const changeDestination = ({ destination }: Pick<TLocation, 'destination'>) => {
    store.destination = destination;
}

const changeOrigin = ({ origin }: Pick<TLocation, 'origin'>) => {
    store.origin = origin;
}

const resetAll = () => {
    store.destination = { latitude: 0, longitude: 0, loaded: false, name: '' }
    store.origin = { latitude: 0, longitude: 0, loaded: false, name: '' }
}

export const location = {
    store,
    changeDestination,
    changeOrigin,
    resetAll
}