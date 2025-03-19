import bcrypt from "bcrypt"
import prisma from "../lib/prisma.js";
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
export const login = (req, res) => { }
export const logout = (req, res) => { }