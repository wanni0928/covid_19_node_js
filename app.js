import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import express from "express";
import helmet from "helmet" //보안강화
import morgan from "morgan"; //디버깅

//routers
import routes from "./routes";
import globalRouter from "./routers/globalRouter";
import { localsMiddleware } from "./middlewares";

const app = express();

app.use(helmet());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan("dev")); // dev가 개발자 디버깅용으로 적합.

app.set("view engine", "pug");
app.use("/static", express.static("static"));

app.use(localsMiddleware);
app.use(routes.home, globalRouter);

export default app;