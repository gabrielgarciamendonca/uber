import { proxy } from "valtio";
import { TCar } from "./types";

const store = proxy<TCar>({
    image: '',
    name: '',
    price: 0,
    seats: 0,
    time: new Date(),
    type: 'none',
    isSelected: false,
});

const changeCar = (car: TCar) => {
    store.image = car.image;
    store.name = car.name;
    store.price = car.price;
    store.seats = car.seats;
    store.time = car.time;
    store.type = car.type;
    store.isSelected = true;
}


const resetAll = () => {
    store.image = '';
    store.name = '';
    store.price = 0;
    store.seats = 0;
    store.time = new Date();
    store.type = 'none';
    store.isSelected = false;
}

export const car = {
    store,
    changeCar,
    resetAll
}