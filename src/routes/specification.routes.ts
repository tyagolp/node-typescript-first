import { Router } from "express";

import { CreateSpecificationController } from "../modules/cars/useCases/createSpecification/CreateSpecificationController";
import { ListSpecificationController } from "../modules/cars/useCases/listSpecification/ListSpecificationController";

const specificationsRouters = Router();

const specificationsController = new CreateSpecificationController();
const listSpecificationController = new ListSpecificationController();

specificationsRouters.post("/", specificationsController.handle);

specificationsRouters.get("/", listSpecificationController.handle);

export { specificationsRouters };
