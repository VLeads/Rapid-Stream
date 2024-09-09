import { Router } from "express";
import { registerUser, logoutUser } from "../controllers/user.controllers.js";
import { upload } from "../middlewares/multer.middlewares.js";
import { verifyJWT } from "../middlewares/auth.middlewares.js";

const router = Router();

router.route("/register").post(
  upload.fields([
    {
      name: "avatar",
      maxCount: 1,
    },
    {
      name: "coverImage",
      maxCount: 1,
    },
  ]),
  registerUser
);

// secured routes
/* if we have more middlewares, we can pass them in sequence

router.route("/logout").post(verifyJWT, middleware2, middleware3, logoutUser)

*/
router.route("/logout").post(verifyJWT, logoutUser)

export default router;
