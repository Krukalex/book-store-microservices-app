import { Router } from "express";
import { signupController } from "../controllers/signup-controller";

const router = Router();

router.post("/api/users/signup", signupController);

export { router as signupRouter };
