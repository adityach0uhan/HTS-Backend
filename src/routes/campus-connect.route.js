import express from "express";
const router = express.Router();
import {registerUser,loginUser} from "../controllers/campus-connect/user.controllers.js";
import {upload} from '../middlewares/multer.middleware.js'
import { verifyJWT } from "../middlewares/isLogin.middleware.js";

router.route("/user/register").post(upload.single('profileImage'),registerUser);
router.route("/user/login").post(loginUser);

module.exports = router;
