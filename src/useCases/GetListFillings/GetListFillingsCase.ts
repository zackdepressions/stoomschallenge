import { IFillingsRepository } from "../../repositories/IFillingsRepository";

export class GetListFillingsCase {
  constructor(
    private fillingsRepository: IFillingsRepository
  ) {}

  async queryAll() {
      return this.fillingsRepository.queryAll()
  }
}