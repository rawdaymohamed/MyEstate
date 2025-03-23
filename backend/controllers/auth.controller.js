import bcrypt from "bcrypt"
import prisma from "../lib/prisma.js";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        // Hash password
        const hashedPassword = await bcrypt.hash(password, 12);
        // Create a new user
        const newUser = await prisma.user.create({
            data: {
                username, email, password: hashedPassword
            }
        });
        return res.status(201).json({ message: "User created successfully" });
    } catch (err) {
        // console.log(err);
        return res.status(500).json({ message: "Failed to create user" })
    }
}
export const login = async (req, res) => {
    try {
        const { username, password } = req.body;

        // Check user exists
        const user = await prisma.user.findUnique({ where: { username } });
        if (!user) return res.status(401).json({ message: "Invalid credentials" });

        // Check correct password
        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) return res.status(401).json({ message: "Invalid credentials" });

        // Generate a cookie tooken
        const age = 1000 * 60 * 60 * 24 * 7; // 7 days
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: age });
        const { password: password_, ...userInfo } = user;
        return res.cookie(
            "token",
            token, {
            httpOnly: true,
            secure: true,
            sameSite: "None",

        }).status(200).json({ message: "Login successful", data: userInfo });

    } catch (err) {
        console.log(err)
        return res.status(500).json({ message: "Failed to login" })
    }
}
export const logout = (req, res) => {
    return res.clearCookie("token").status(200).json({ message: "You logged out successfully" });
}