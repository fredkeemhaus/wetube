import express from "express";
import routes from "../routes";
import { 
    users, 
    usersDetail, 
    editProfile, 
    changePassword 
} from "../controllers/userController";

const userRouter = express.Router();

userRouter.get(routes.users, users);
userRouter.get(routes.usersDetail, usersDetail);
userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.changePassword, changePassword);

export default userRouter;


