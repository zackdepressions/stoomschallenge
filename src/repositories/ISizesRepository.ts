import { Size } from "../entities/Size";

export interface ISizesRepository {
  queryAll(): Promise<Size[]>;
}