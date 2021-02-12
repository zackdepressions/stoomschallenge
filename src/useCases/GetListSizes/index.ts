import { PostgresSizeRepository } from "../../repositories/implementations/SizesRepository";
import { GetListSizesCase } from "./GetListSizesCase";
import { GetListSizesController } from "./GetListSizesController";

const postgresFillingRepository = new PostgresSizeRepository()

const getListUseCase = new GetListSizesCase(
  postgresFillingRepository
)

const getListSizesController = new GetListSizesController(
  getListUseCase
)

export { getListUseCase, getListSizesController }