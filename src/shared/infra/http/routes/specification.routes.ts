import { Router } from "express";

import { CreateSpecificationController } from "@modules/cars/useCases/createSpecification/CreateSpecificationController";
import { ListSpecificationController } from "@modules/cars/useCases/listSpecification/ListSpecificationController";
import { ensureAuthenticated } from "@shared/infra/http/middlewares/ensureAuthenticated";

const specificationsRouters = Router();

const specificationsController = new CreateSpecificationController();
const listSpecificationController = new ListSpecificationController();

specificationsRouters.use(ensureAuthenticated);
specificationsRouters.post("/", specificationsController.handle);

specificationsRouters.get("/", listSpecificationController.handle);

export { specificationsRouters };
