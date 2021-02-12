import { PostgresPastaRepository } from "../../repositories/implementations/PastasRepository";
import { GetListPastasCase } from "./GetListPastasCase";
import { GetListPastasController } from "./GetListPastasController";

const postgresPastaRepository = new PostgresPastaRepository()

const getListUseCase = new GetListPastasCase(
  postgresPastaRepository
)

const getListPastaController = new GetListPastasController(
  getListUseCase
)

export { getListUseCase, getListPastaController }