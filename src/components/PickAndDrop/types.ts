import { PressableProps } from "react-native/types";

export type TPickAndDrop = {
    pickUp: string;
    dropOff: string;
    opened: boolean;
} & PressableProps;