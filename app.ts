import { Application  } from './mod/index.ts'; // 所有mod 
import { router } from "./router.ts";
const app = new Application();
const PROT : number =  5000;

app.use(router.routes()); // ? 中间件

app.use(router.allowedMethods());


console.log(`http://localhost:${PROT}`);




await app.listen({ port: PROT })