import { IPastasRepository } from "../../repositories/IPastasRepository";

export class GetListPastasCase {
  constructor(
    private pastasRepository: IPastasRepository
  ) {}

  async queryAll() {
      return this.pastasRepository.queryAll()
  }
}