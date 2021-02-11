import { uuid } from 'uuidv4'

export class Pasta {

  public readonly id: string;

  public name: string;
  public price: number;
  public image: string;
  constructor(props: Omit<Pasta, 'id'>, id?: string) {
    Object.assign(this, props);

    if (!id) {
      this.id = uuid();
    }
  }
}