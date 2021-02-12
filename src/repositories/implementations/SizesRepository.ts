import { ISizesRepository } from "../ISizesRepository";
import { Size } from "../../entities/Size";

export class PostgresSizeRepository implements ISizesRepository {
  private Sizes: Size[] = [];

  async queryAll(): Promise<Size[]> {
    await new Promise(resolve => setTimeout(resolve, 1000));
    var sizesList: Size[] = [
      {
        id: '1',
        name: 'Broto',
        price: 5,
        image: 'public/assets/broto.png'
      },
      {
        id: '2',
        name: 'Média',
        price: 10,
        image: 'public/assets/media.png'
      },
      {
        id: '3',
        name: 'Grande',
        price: 15,
        image: 'public/assets/grande.png'
      },
    ]
    return sizesList;
  }
}