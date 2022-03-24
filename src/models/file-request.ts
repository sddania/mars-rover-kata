import { Mars } from "./mars";
import { RowCommands } from "./command";

export type FileRequest = {
  mars: Mars,
  commands: RowCommands[]
}
