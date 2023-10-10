 
import { HashPassword,comparePassword} from "../Helpers/AuthHelper.js"
import userModel from "../Models/userModel.js"
import JWT from "jsonwebtoken"

export const RegisterController = async (req, res) => {
    try {
        const { name, email, password, phone, address } = req.body
        if (!name) {
            return res.send({ success: 'Name is required' })
        }
        if (!email) {
            return res.send({ success: 'Email is required' })
        }
        if (!password) {
            return res.send({ success: 'Password is required' })
        }
        if (!phone) {
            return res.send({ success: 'Phone is required' })
        }
        if (!address) {
            return res.send({ success: 'Address is required' })
        }

        const userPresent = await userModel.findOne({ email })

        if (userPresent) {
            return res.status(200).send({
                success: false,
                message: "Already Register Please Login"
            })
        }

        const hashpassword = await HashPassword(password)
        const user = new userModel({ name, email, password: hashpassword, phone, address })
        user.save()
        res.status(201).send({
            success: true,
            message: 'User Register Successfully',
            user
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: 'error in registration',
            error
        })
    }
}

 

export const LoginController = async(req,res) => {
 try {
    const {email,password}=req.body
    if(!email|| !password){
        return res.status(400).send('Invalid Credentials')
    }

    const getUser=await userModel.findOne({email})
    if(!getUser){
      return res.status(400).send({
        success:false,
        message:'Email is not Registered',
      })     
    }
    const match=await comparePassword(password,getUser.password)
    if(!match){
        return res.status(200).send({
            success:false,
            message:"Invalid Password"
        })
    }
    
    const token=await JWT.sign({_id:getUser._id},process.env.JWT_SECRET,{
        expiresIn:'7d'
    })
    
    res.status(200).send({
        success:true,
        message:"successfully Login",
        user:{
            name:getUser.name,
            email:getUser.email,
            phone:getUser.phone,
            address:getUser.address
        },
        token,
    })
 } catch (error) {
    console.log(error)
    res.status(500).send({
        success:false,
        message:'Error in Login',
        error
    })
 }
}
