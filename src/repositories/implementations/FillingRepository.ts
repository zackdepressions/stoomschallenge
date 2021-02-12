import { IFillingsRepository } from "../IFillingsRepository";
import { Filling } from "../../entities/Filling";

export class PostgresFillingRepository implements IFillingsRepository {
  private Fillings: Filling[] = [];

  async queryAll(): Promise<Filling[]> {
    await new Promise(resolve => setTimeout(resolve, 1000));
    var fillingsList: Filling[] = [
      {
        id: '1',
        name: 'Frango',
        price: 10,
        image: 'public/assets/frango.png'
      },
      {
        id: '2',
        name: 'Portuguesa',
        price: 10,
        image: 'public/assets/portuguesa.png'
      },
      {
        id: '3',
        name: 'Calabresa',
        price: 10,
        image: 'public/assets/calabresa.png'
      },
    ]
    return fillingsList;
  }
}