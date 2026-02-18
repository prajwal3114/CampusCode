import express from "express";
import cors from "cors";
import authRoutes from "./src/modules/auth/auth.routes.js";
import userRoutes from "./src/modules/users/user.routes.js";
import organizationRoutes from "./src/modules/organizations/organization.routes.js";
import courseRoutes from "./src/modules/course/course.routes.js";
import competitionRoutes from "./src/modules/competitions/competitions.routes.js";


const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/organizations", organizationRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api/competitions", competitionRoutes);
app.get("/", (req, res) => {
  res.send("Hello World!");
});

export default app;
