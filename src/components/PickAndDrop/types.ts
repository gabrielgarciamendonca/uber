import { PressableProps } from "react-native/types";

export type TPickAndDrop = {
    pickUp: string;
    opened: boolean;
} & PressableProps;