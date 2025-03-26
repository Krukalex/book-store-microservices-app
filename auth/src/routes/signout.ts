import { Router } from "express";
import { signoutController } from "../controllers/signout-controller";

const router = Router();

router.post("/api/users/signup", signoutController);

export { router as signoutRouter };
