import { Coordinates } from "./rover";

export type GridSize = Coordinates;
export type Obstacle = Coordinates;
export type Obstacles = Obstacle[];
export type Mars = {
  gridSize: GridSize,
  obstacles: Obstacles
}
