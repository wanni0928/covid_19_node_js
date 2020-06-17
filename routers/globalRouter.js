import express from "express";
import routes from "../routes";
import { home, getJoin, getSearch, getLogout, getLogin, getUserDetail } from "../controller/galleryController";
import { covidCountry, covidSearch } from "../middlewares";

const globalRouter = express.Router();

// home
globalRouter.get(routes.home, home);

// join
globalRouter.get(routes.join, getJoin);

// login
globalRouter.get(routes.login, getLogin);

// logout
globalRouter.get(routes.logout, getLogout);

// search
globalRouter.get(routes.search(), covidSearch, getSearch);

// userDetail
// globalRouter.get(routes.userDetail(), getUserDetail);

export default globalRouter;