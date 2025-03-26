import { Router } from "express";
import { signinController } from "../controllers/signin-controller";

const router = Router();

router.post("/api/users/signup", signinController);

export { router as signinRouter };
