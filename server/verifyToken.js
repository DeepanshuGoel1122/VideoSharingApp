import jwt from "jsonwebtoken";
import { createError } from "./error.js";

export const verifyToken = (req, res, next) => {
    const token = req.cookies.access_token

    if (!token) return next(createError(401, "Please signin first"))

    // if we have token it doesnt mean we are valid, lets verify it
    jwt.verify(token, process.env.JWT, (err, user) => {
        if (err) return next(createError(402, "Token is not valid"))
        req.user = user;
        next()
    })
} 