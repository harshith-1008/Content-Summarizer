import { Router } from "express";
import { loginUser, registerUser } from "../controllers/user.controller.js";

const router = Router();

router.route("/register-user").post(registerUser);
router.route("/login-user").post(loginUser);

export default router;
