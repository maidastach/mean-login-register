import bcrypt from 'bcrypt'
import { User } from "../models/userModel"

export const login = async(req, res, next) =>
{
    const { email, password } = req.body;

    const user = await User.findOne( 
        { email: email }, 
        async(err, doc) => 
        {
            if(err)
                return res.status(400).send({ success: false, error: err, message: 'DB connection issue. Try Again',  })
        }
    )
    if(!user)
        return res.status(401).send({ success: false, flag: 'email', message: 'Email non risulta registrata' })
    else
    {
        await bcrypt.compare(
            password, 
            user.password, 
            (err, isMatch) => 
            {
                if(err)
                    return next()
                else if(!isMatch)
                    return res.status(401).send({ success: false, flag: 'password', message: 'Password errata. Riprova' })
                else if(isMatch)
                {
                    req.session.user = user._id.toString();
                    const flag = user.isAdmin ? 'admin' : 'user'
                    res.status(200).send({ success: true, message: 'LOGIN SUCCESSFULL', response: user.user, flag: flag })
                }

                
            }
        );
    }
}


export const registerUser = async(req, res, next) => 
{
    const { fname, user, email, password, isAdmin } = req.body;

    const findUserByEmail = await User.findOne( 
        { email: email }, 
        async(err, doc) => 
        {
            if(err)
                return res.status(400).send({ success: false, error: err, message: 'DB connection issue. Try Again' })
        }
    )
    if(findUserByEmail)
        return res.status(400).send({ success: false, flag: 'email', message: 'Email gia registrata con noi' })
    
    const findUserByUser = await User.findOne(
        { user: user }, 
        async(err, doc2) => 
        {
            if(err)
                return res.status(400).send({ success: false, error: err, message: 'DB connection issue. Try Again' })
        }
    )

    if(findUserByUser)
        return res.status(400).send({ success: false, flag: 'user', message: 'Username gia esistente' })
    else
    {
        await bcrypt.hash(
            password, 
            10,
            async(err, hash) => 
            {
                if(err)
                    return next()
                const newUser = await User.create(
                    { fname, user, email, password: hash, isAdmin },
                    (err, doc) => 
                    {
                        if(err)
                            return res.status(400).send({ success: false, message: 'Errore nel salvataggio, Riprova' })
                        else if(doc)
                        {
                            req.session.user = doc._id.toString();
                            const flag = isAdmin ? 'admin' : 'user'
                            return res.status(200).send({ success: true, message: 'USER Registered', flag: flag })
                        }
                    }
                );
            }
        );
    }
}

export const isAdmin = async(req, res, next) => 
{
    const user = req.session.user
    if(!user)
        return res.status(401).send({ success: false, message: 'You are not logged in' })
    else
    {
        const findUser = await User.findById(
            user, 
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
            return res.send({ success: true, message: 'Admin Autorized' })
        else
            return res.send({ success: false, message: 'You do not have Admin Powers' })
    }
}

export const isLogged = async(req, res, next) => 
{
    const user = req.session.user
    if(!user)
        return res.send({ success: false, message: 'You are not logged in' })
    else
        return res.send({ success: true, message: 'Autorized' })
}

export const logout = async(req, res, next) => 
{
    req.session.destroy(err => err && next())
    res.send({ success: true, message: 'Logged Out' })
}