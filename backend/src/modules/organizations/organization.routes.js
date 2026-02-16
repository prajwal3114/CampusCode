import express from "express";
import { create, assign, list } from "./organization.controller.js";
import { authenticateUser } from "../../middlewares/auth.middlewares.js";
import { authorizeRoles } from "../../middlewares/role.middleware.js";

const router = express.Router();

/*
  Create Organization
  ADMIN only
*/
router.post(
    "/create",
    authenticateUser,
    authorizeRoles("ADMIN"),
    create
);

/*
  Assign Organizer
  ADMIN only
*/
router.patch(
    "/assign/:id",
    authenticateUser,
    authorizeRoles("ADMIN"),
    assign
);

/*
  Get All Organizations
  Any logged-in user
*/
router.get(
    "/",
    authenticateUser,
    list
);

export default router;
