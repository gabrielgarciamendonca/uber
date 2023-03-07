import { TType } from "../../../../types/types";

export type TCar = {
    type: TType,
    name: string;
    seats: number;
    price: number;
    time: Date;
    image: string;
    isSelected: boolean;
}