import { Router } from "express";
import { getListPastaController } from "./useCases/GetListPastas";
import { getListSizesController } from "./useCases/GetListSizes";
import { getListFillingsController } from "./useCases/GetListFillings";



const router = Router()

router.get('/pastas', (request, response) => {
  return getListPastaController.handle(request, response);
});

router.get('/sizes', (request, response) => {
  return getListSizesController.handle(request, response);
});

router.get('/fillings', (request, response) => {
  return getListFillingsController.handle(request, response);
});

export { router }