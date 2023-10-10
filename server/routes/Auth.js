import express from 'express'
import {RegisterController,LoginController} from '../controllers/AuthController.js'
import {isAdmin, reqSignIN} from '../middleware/authMiddle.js'
const router=express.Router()

router.post('/register',RegisterController)
router.post('/login',LoginController)
router.get('/test',reqSignIN,isAdmin,(req,res)=>{
    res.send('middleware working')
})
export default router