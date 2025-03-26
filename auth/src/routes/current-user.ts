import { Router } from "express";
import { currentUserController } from "../controllers/current-user-controller";

const router = Router();

router.get("/api/users/currentUser", currentUserController);

export { router as currentUserRouter };
