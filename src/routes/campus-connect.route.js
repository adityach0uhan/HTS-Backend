import express from "express";
const router = express.Router();
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/isLogin.middleware.js";
//user controller imports
import {
  registerUser,
  loginUser,
  logoutUser,
  changeCurrentPassword,
  getCurrentUser,
  getAllUser,
  updateAccountDetails,
  updateProfileImage,
  getAllUserOfCollage
} from "../controllers/campus-connect/user.controllers.js";

//Event controllers import
import {
  addEvent,
  deleteEvent,
  getAllEvents,
  getEventDetails,
  updateEvent,
} from "../controllers/campus-connect/event.controllers.js";

//Routes for User
router
  .route("/user/register")
  .post(upload.single("profileImage"), registerUser);
router.route("/user/login").post(loginUser);
//secured routes (authentication required)
router.route("/user/logout").get(verifyJWT, logoutUser);
router.route("/user/change-password").post(verifyJWT, changeCurrentPassword);
router.route("/user/current-user").get(verifyJWT, getCurrentUser);
router.route("/user/all").get(verifyJWT, getAllUser);
router.route("/user/college/all").get(verifyJWT, getAllUserOfCollage);
router.route("/user/update-account").patch(verifyJWT, updateAccountDetails);
router
  .route("/user/update/profileImage")
  .patch(verifyJWT, upload.single("profileImage"), updateProfileImage);

//Event Related Route
router.route("/event/add").post(verifyJWT, upload.single("poster"), addEvent);
router.route("/event/update/:id").patch(verifyJWT, updateEvent);
router.route("/event/delete/:id").delete(verifyJWT, deleteEvent);
router.route("/event/:id").get(verifyJWT, getEventDetails);
router.route("/event/all").get(verifyJWT, getAllEvents);
export default router;
