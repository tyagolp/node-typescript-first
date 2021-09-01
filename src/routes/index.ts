import { Router } from "express";

import { authenticateRoutes } from "./authenticate.routes";
import { categoriesRoutes } from "./categories.routes";
import { specificationsRouters } from "./specification.routes";
import { usersRouters } from "./users.routes";

const router = Router();

router.use("/categories", categoriesRoutes);
router.use("/specifications", specificationsRouters);
router.use("/users", usersRouters);
router.use(authenticateRoutes);

export { router };
