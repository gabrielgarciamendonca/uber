import { ImageSourcePropType, PressableProps } from "react-native/types";
import { TType } from "../../types/types";

export type TItem = { isSelected?: boolean, img: ImageSourcePropType, title: string } & PressableProps

export type TPickCar = {
    selected: TType;
    handleSelect: (item: TType) => void;
}