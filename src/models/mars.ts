import {Coordinates} from "./rover";

export type Size = Coordinates;
export type Obstacles = Coordinates[];
export type Mars = {
    gridDimension: Size,
    obstacles: Obstacles
}
