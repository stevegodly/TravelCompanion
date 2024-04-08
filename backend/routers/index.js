const express=require('express')
const router=express.Router()

const {userLogin,registerUser}=require('../controllers/User')

router.route('/login').post(userLogin)
router.route('/register').post(registerUser)

module.exports=router