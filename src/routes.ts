import { Router } from "express";
import { getListController } from "./useCases/GetListPastas";

const router = Router()

router.get('/pastas', (request, response) => {
  return getListController.handle(request, response);
});

export { router }