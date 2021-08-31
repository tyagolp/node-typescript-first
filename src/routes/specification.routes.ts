import { Router } from "express";

import { CreateSpecificationController } from "../modules/cars/useCases/createSpecification/CreateSpecificationController";
import { ListSpecificationController } from "../modules/cars/useCases/listSpecification/ListSpecificationController";

const specificationsRouter = Router();

const specificationsController = new CreateSpecificationController();
const listSpecificationController = new ListSpecificationController();

specificationsRouter.post("/", specificationsController.handle);

specificationsRouter.get("/", listSpecificationController.handle);

export { specificationsRouter };
