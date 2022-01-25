import Router from "koa-router";
import { createWord ,getAllWords} from "../controllers/wordCtrl";
const apiRouter = new Router();


apiRouter
.post("/words",createWord)
.get("/words",getAllWords);

export default apiRouter;