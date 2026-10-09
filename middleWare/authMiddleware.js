const { StatusCodes } = require("http-status-codes");
const jwt = require("jsonwebtoken");

async function authMiddleware(req,res,next){
    const authHeader=req.headers.authHeader;
    if(!authHeader){
        return res.status(StatusCodes.UNAUTHORIZED).json({message:"unauthorized access!"})
    }
    try{
        const data=jwt.verify(authHeader,"secret");
        return res.status(StatusCodes.OK).json({data})

    }catch(error){
        return res.status(StatusCodes.UNAUTHORIZED).json({message:"unauthorized access!"})

    }
}
module.exports=authMiddleware;