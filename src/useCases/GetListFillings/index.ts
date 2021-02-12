import { PostgresFillingRepository } from "../../repositories/implementations/FillingRepository";
import { GetListFillingsCase } from "./GetListFillingsCase";
import { GetListFillingsController } from "./GetListSizesController";

const postgresFillingRepository = new PostgresFillingRepository()

const getListUseCase = new GetListFillingsCase(
  postgresFillingRepository
)

const getListFillingsController = new GetListFillingsController(
  getListUseCase
)

export { getListUseCase, getListFillingsController }