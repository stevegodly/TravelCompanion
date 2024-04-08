const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User=require('../models/User')

const userLogin=async(req,res,next)=>{
    const {username,password}=req.body
    const user=await User.findOne({username})
    if(!user) next(createCustomError('user not found'))
    if(bcrypt.compareSync(password,user.password)){
        jwt.sign({ userId: user._id, username }, jwtSecret, {}, (err, token) => {
            if (err) {
                return next(err);
            }
            res.cookie('token', token, { sameSite: 'none', secure: true }).status(200).json({ id: user._id });
        });
    }
}

const registerUser = async (req, res, next) => {
    const { username, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, bcryptSalt);
    
    const user = await User.create({
        username: username,
        password: hashedPassword,
    });

    if (!user) {
        return next(createCustomError('User not created'));
    }

    jwt.sign({ userId: user._id, username }, jwtSecret, {}, (err, token) => {
        if (err) {
            return next(err);
        }
        res.cookie('token', token, { sameSite: 'none', secure: true }).status(200).json({ id: user._id });
    });
};