import express from "express";
import { profile, update, changePassword } from "./user.controller.js";
import { authenticateUser } from "../../middlewares/auth.middlewares.js";

const router = express.Router();

/*
  All routes require authentication
*/

router.get("/profile", authenticateUser, profile);

router.patch("/update", authenticateUser, update);

router.patch("/change-password", authenticateUser, changePassword);

export default router;
