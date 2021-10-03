import { User } from "../models/userModel"

export const isLogged = async(req, res, next) => 
{
    const userId = req.session.user
    if(!userId)
        return res.status(401).send({ success: false, message: 'You are not logged in' })
    else
    {
        const user = await User.findById(userId)
        if(!user)
            return res.status(401).send({ success: false, message: 'You are not logged in' })
        return next()
    }
        
}