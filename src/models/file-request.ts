import { Mars } from "./mars";
import { Commands } from "./command";

export type FileRequest = {
  mars: Mars,
  commands: Commands[]
}
