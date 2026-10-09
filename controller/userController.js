const dbConnection = require("../db/dbConfige");
const bcrypt = require("bcrypt");
const { StatusCodes } = require("http-status-codes");

async function register(req, res) {
    const{ userName,firstName,lastName,email,password}=req.body;
    if(!userName || !firstName || !lastName || !email || !password){
        return res.status(StatusCodes.BAD_REQUEST).json({message: "please fill all the fields!"})
    }
    try{
        const [user]= await dbConnection.query("SELEct userName, userId from users where userName=? or email=?",[userName,email]);
        if(user.length>0){
            return res.status(StatusCodes.NOT_FOUND).json ({message:"user already existed!"})
        }
        if(password.length<8){
            return res.status(StatusCodes.BAD_REQUEST).json({message:"password must be atLeast 8 characters!"})
        }

        //encrypt the password
        const salt=await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);
        await dbConnection.query("INSERT INTO users (userName,firstName,lastName,email,password) VALUES (?,?,?,?,?)", [userName, firstName, lastName, email, hashedPassword]);
        return res.status(StatusCodes.OK).json({message:"user registered successfully!"})
    }catch(error){
        console.log(error.message)
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message:"something wonts wrong try again latter!"})
    }

}
async function login(req, res) {
    res.send("user logged in successfully");
}
async function checkUser(req, res) {
    res.send("user is logged in");
}

module.exports = { register, login, checkUser };