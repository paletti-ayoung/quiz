import Router from "koa-router";

const rootRouter = new Router();

rootRouter.get('/', async(ctx,next) => {

    await ctx.render("home");
	
});

export default rootRouter;
