import { uuid } from 'uuidv4'

export class Size {

  public readonly id: string;

  public name: string;
  public price: number;
  public image: string;
  constructor(props: Omit<Size, 'id'>, id?: string) {
    Object.assign(this, props);

    if (!id) {
      this.id = uuid();
    }
  }
}