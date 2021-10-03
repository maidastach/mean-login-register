import { User } from "../models/userModel"

export const getUser = async(req, res, next) => 
{
    const userId = req.session.user
    if(!userId)
        return next()
    
    const user = await User.findById(
        userId,
        err =>
        {
            if(err)
                return next()
        }
    )

    if(!user)
        return res.status(401).send({ success: false, message: 'Unauthorized' })
    else
        return res.send(
            { 
                success: true, 
                message: 'Logged', 
                response: 
                    { 
                        fname: user.fname, 
                        user: user.user,
                        email: user.email,
                        isAdmin: user.isAdmin
                    } 
            }
        )
}

export const getUsers = async(req, res, next) => 
{
    const userId = req.session.user
    if(!userId)
        return next()
    
    const users = await User.find(
        { _id: { $ne: userId } },
        'fname user email isAdmin -_id',
        err =>
        {
            if(err)
                return next()
        }
    )

    if(!users)
        return res.status(401).send({ success: false, message: 'Error Finding Users' })
    else
        return res.send(
            { 
                success: true, 
                message: 'Logged', 
                response: users
            }
        )
}