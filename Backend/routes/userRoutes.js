import { Router } from "express";
const route = Router();
import { handleLogin ,handleLogout, handleSignup  ,handleDashboard , handleVerification } 
from "../controllers/userControllers.js";
import { checkAuth } from "../middleware/userMiddlewares.js";

route
.get("/logout" , handleLogout)
.post("/login" , handleLogin)
.post("/signup" , handleSignup)
.get("/verify" , checkAuth , handleVerification)
.get("/dashboard" , checkAuth, handleDashboard)




export default route;
