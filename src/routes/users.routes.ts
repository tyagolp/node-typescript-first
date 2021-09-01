import { Router } from "express";

import { CreateUserController } from "../modules/accounts/useCases/createUser/CreateUserController";

const usersRouters = Router();

const creatUserController = new CreateUserController();

usersRouters.post("/", creatUserController.handle);

export { usersRouters };
