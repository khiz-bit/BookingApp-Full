import express from "express";
import { deleteUser, getUser, getUsers, updateUser } from "../controllers/userController.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// router.get("/checkauthentication", verifyToken, (req,res,next) => {
//     res.send("Hello! You are logged in.")
// })

// router.get("/checkuser/:id", verifyUser, (req,res,next) => {
//     res.send("Hello user! You are logged in, you can delete your account.")
// })

// router.get("/checkadmin/:id", verifyAdmin, (req,res,next) => {
//     res.send("Hello admin! You are logged in, you can delete any account.")
// })

//UPDATE
router.put("/:id", verifyUser, updateUser)

//DELETE
router.delete("/:id", verifyAdmin, deleteUser)

//GET
router.get("/:id", verifyUser, getUser)

//GET ALL
router.get("/", verifyAdmin, getUsers)


export default router