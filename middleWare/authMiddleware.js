const { StatusCodes } = require("http-status-codes");
const jwt = require("jsonwebtoken");
async function authMiddleware(req, res, next) { 
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(StatusCodes.UNAUTHORIZED).json({
           message: "unauthorized access!"
        });
    }

    const token = authHeader.split(" ")[1];

    try {
        const { userName, userId } = jwt.verify(token, process.env.JWT_SECRET);

        req.user = { userName, userId };

        next();
    } catch (error) {
        return res.status(StatusCodes.UNAUTHORIZED).json({
            message: "unauthorized access!"
        });
    }
}
module.exports = authMiddleware;