import express from "express";
import { register, login } from "./auth.controllers.js";
import { authenticateUser } from "../../middlewares/auth.middlewares.js";
import { authorizeRoles } from "../../middlewares/role.middleware.js";

const router = express.Router();

/*
  Public Routes
*/
router.post("/register", register);
router.post("/login", login);

/*
  Protected Route - Any Logged In User
*/
router.get("/me", authenticateUser, (req, res) => {
  return res.status(200).json({
    success: true,
    data: req.user
  });
});

/*
  Protected Route - Admin Only
*/
router.get(
  "/admin-test",
  authenticateUser,
  authorizeRoles("ADMIN"),
  (req, res) => {
    return res.status(200).json({
      success: true,
      message: "Welcome Admin"
    });
  }
);

export default router;
