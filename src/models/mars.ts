import {Coordinates} from "./rover";

export type GridSize = Coordinates;
export type Obstacles = Coordinates[];
export type Mars = {
    gridSize: GridSize,
    obstacles: Obstacles
}
