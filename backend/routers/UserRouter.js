import express from 'express'
import asyncHandler from 'express-async-handler'
import { getUsers } from '../controllers/UserControllers';
import { getUser } from '../controllers/UserControllers';
import { isAdmin } from '../middlewares/isAdmin';
import { isLogged } from '../middlewares/isLogged';

const UserRouter = express.Router()

//api/user

UserRouter.get('/', isLogged, asyncHandler(getUser))

UserRouter.get('/users', isAdmin, asyncHandler(getUsers))


export default UserRouter;