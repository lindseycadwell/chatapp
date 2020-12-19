import { Router } from "express";
import TestController from "../controllers/TestController.js";

var router = Router({ mergeParams: true });

router.get("/", TestController.getStuff);

export default router;
