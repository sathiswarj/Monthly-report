const authModel = require("../model/auth.model")
const {v4:uuidv4} = require("uuid") 
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


const signup = async(req,res) =>{
    const {username, email,password} = req.body
    if(!username || !email || !password){
        return res.status(400).json({message:"Missing required fields"})
    }
    try {
        const user = await authModel.findOne ({email:email})
        if(user){
           return res.status(400).json({message:"User already exists"})
        }
        const hashedPassword = await bcrypt.hash(password, 10)
        const newUser = new authModel({
            userId:uuidv4(),
            userName:username,
            email:email,
            password:hashedPassword
        })
        await newUser.save()    
       return res.status(201).json({message:"User created successfully"})
    } catch (error) {
       return res.status(500).json({message:"Internal server error"})
    }
}

const login = async(req,res) =>{
    const {email,password} = req.body
    if(!email || !password){
        return res.status(400).json({message:"Missing required fields"})
    }
    try{
        const user = await authModel.findOne({email:email})
        if(!user){
            return res.status(400).json({message:"User does not exist"})
        }
        const isPasswordValid = await bcrypt.compare(password, user.password)
        if(!isPasswordValid){
            return res.status(400).json({message:"Invalid password"})
        }
        const token = jwt.sign({userId: user.userId, userName: user.userName, email: user.email}, 'secret123', {expiresIn: '1h'})
        return res.status(200).json({message:"Login successful", token: token})
    }   
    catch (error) {
        return res.status(500).json({message:"Internal server error"})
    }

}

module.exports = {signup, login}