import express from 'express'
import asyncHandler from 'express-async-handler'
import { login, registerUser, forgotPassword, isLogged, logout, isAdmin } from '../controllers/AuthControllers';

const AuthRouter = express.Router()

//api/auth

AuthRouter.post('/login', asyncHandler(login))

AuthRouter.post('/register', asyncHandler(registerUser))

AuthRouter.post('/forgotpassword', asyncHandler(forgotPassword))

AuthRouter.get('/islogged', asyncHandler(isLogged))

AuthRouter.get('/isadmin', asyncHandler(isAdmin))

AuthRouter.get('/logout', asyncHandler(logout))

export default AuthRouter;