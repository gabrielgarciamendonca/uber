type TPosition = {
    latitude: number;
    longitude: number;
    loaded: boolean;
    name: string;
}
export type TLocation = {
    origin: TPosition;
    destination: TPosition;
}