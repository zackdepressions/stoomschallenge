import { Filling } from "../entities/Filling";

export interface IFillingsRepository {
  queryAll(): Promise<Filling[]>;
}