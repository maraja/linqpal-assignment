import express from 'express';
let router = express.Router();

import userController from "#root/server/controllers/users";

const {
    postUser,
    getUsers
} = userController

router.get("/", getUsers)
router.post("/", postUser)


export default router;