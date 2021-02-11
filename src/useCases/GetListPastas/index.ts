import { PostgresPastaRepository } from "../../repositories/implementations/PastasRepository";
import { GetListPastasCase } from "./GetListPastasCase";
import { GetListPastasController } from "./GetListPastasController";

const postgresUsersRepository = new PostgresPastaRepository()

const getListUseCase = new GetListPastasCase(
  postgresUsersRepository
)

const getListController = new GetListPastasController(
  getListUseCase
)

export { getListUseCase, getListController }