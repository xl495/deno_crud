import { Router } from './mod/index.ts'

const router = new Router()

// PEST START

import { get } from "./controller/get.ts";
router.get('/',get);


// PEST AND END



export default router;