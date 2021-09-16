import { Router } from "express";
import multer from "multer";

import uploadConfig from "@config/upload";
import { CreateUserController } from "@modules/accounts/useCases/createUser/CreateUserController";
import { UpdateUserAvatarController } from "@modules/accounts/useCases/updateUserAvatar/UpdateUserAvatarController";
import { ensureAuthenticated } from "@shared/infra/http/middlewares/ensureAuthenticated";

const usersRouters = Router();

const uploadAvatar = multer(uploadConfig.upload("./tmp/avatar"));

const creatUserController = new CreateUserController();
const updateUserAvatarController = new UpdateUserAvatarController();

usersRouters.post("/", creatUserController.handle);

usersRouters.patch(
    "/avatar",
    ensureAuthenticated,
    uploadAvatar.single("avatar"),
    updateUserAvatarController.handle
);

export { usersRouters };
