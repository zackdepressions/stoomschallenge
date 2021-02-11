import { IPastasRepository } from "../IPastasRepository";
import { Pasta } from "../../entities/Pasta";

export class PostgresPastaRepository implements IPastasRepository {
  private pastas: Pasta[] = [];

  async queryAll(): Promise<Pasta[]> {
    await new Promise(resolve => setTimeout(resolve, 1000));
    var pastasList: Pasta[] = [
      {
        id: '1',
        name: 'Napolitana',
        price: 10,
        image: 'public/assets/napo.png'
      },
      {
        id: '2',
        name: 'Siciliana',
        price: 20,
        image: 'public/assets/sici.png'
      }
    ]
    return pastasList;
  }
}