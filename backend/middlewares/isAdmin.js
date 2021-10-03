import { User } from "../models/userModel"

export const isAdmin = async(req, res, next) => 
{
    const userId = req.session.user
    if(!userId)
        return res.status(401).send({ success: false, message: 'You are not logged in' })
    else
    {
        const findUser = await User.findById(
            userId, 
            err => 
            {
                if(err) 
                    return next()
            }
        )
        if(!findUser)
        {
            req.session.destroy(err => err && next())
            console.log('session destroyed');
            return res.status(401).send({ success: false, message: 'You are not logged in' })
        }
        if(findUser.isAdmin)
            return next()
        else
            return res.status(401).send({ success: false, message: 'You are not logged in' })
    }
}