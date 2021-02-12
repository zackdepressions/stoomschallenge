import { ISizesRepository } from "../../repositories/ISizesRepository";

export class GetListSizesCase {
  constructor(
    private sizesRepository: ISizesRepository
  ) {}

  async queryAll() {
      return this.sizesRepository.queryAll()
  }
}