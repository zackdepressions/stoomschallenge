import { Pasta } from "../entities/Pasta";

export interface IPastasRepository {
  queryAll(): Promise<Pasta[]>;
}