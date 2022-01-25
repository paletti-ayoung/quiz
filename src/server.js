import koa from 'koa';
import Pug from 'koa-pug';
import path from 'path';
import morgan from 'morgan';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import serve from 'koa-static';
import mount from 'koa-mount';
import rootRouter from './routers/rootRouter.js'
import apiRouter from './routers/apiRouter'
const app = new koa();
const logger = morgan("dev");
const router = new Router();

const __dirname = path.resolve();

const pug = new Pug({
	viewPath:path.join(__dirname+"/src/views"),
	app:app
})

console.log(__dirname);
app.use(serve(__dirname + "/"))
app.use(bodyParser());
app.use(mount("/static", serve("assets")));
app.use(router.routes()).use(router.allowedMethods());
router.use('/',rootRouter.routes());
router.use('/api',apiRouter.routes());

app.use(logger);

export default app;