import express from "express";
import routes from "../routes";
import { logout, login, join, getJoin, postJoin } from "../controllers/userController";
import { search, home } from "../controllers/videoController";


const globalRouter = express.Router();

globalRouter.get(routes.join, getJoin);
globalRouter.post(routes.join, postJoin);

globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);
globalRouter.get(routes.login, login);
globalRouter.get(routes.logout, logout);

export default globalRouter;