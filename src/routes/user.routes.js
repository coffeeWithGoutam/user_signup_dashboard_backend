import { Router } from "express";
import { getUsers, signUpUser } from "../controller/user.controller.js";

const router = Router();

router.route("/sign-up").post(signUpUser);
router.route("/users").get(getUsers);

export default router;
