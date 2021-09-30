import { Router } from "express";

import { CreateSpecificationController } from "@modules/cars/useCases/createSpecification/CreateSpecificationController";
import { ListSpecificationController } from "@modules/cars/useCases/listSpecification/ListSpecificationController";
import { ensureAuthenticated } from "@shared/infra/http/middlewares/ensureAuthenticated";

import { ensureAdmin } from "../middlewares/ensureAdmin";

const specificationsRouters = Router();

const specificationsController = new CreateSpecificationController();
const listSpecificationController = new ListSpecificationController();

specificationsRouters.post(
    "/",
    ensureAuthenticated,
    ensureAdmin,
    specificationsController.handle
);

specificationsRouters.get("/", listSpecificationController.handle);

export { specificationsRouters };
