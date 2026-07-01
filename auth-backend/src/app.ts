import express from "express";
import passport from "passport";
import routes from "./routes/index.js";
import "./services/auth.js"

const app = express();
app.use(express.json());
app.use(passport.initialize())
app.use("/",routes);
//app.use(errorHandler);

export default app;