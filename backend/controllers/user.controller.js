import bcrypt from "bcrypt"
import prisma from "../lib/prisma.js"

export const get = async (req, res) => {
    try {
        const user = await prisma.user.findUnique({ where: { id: req.params.id } })
        return res.status(200).json({ data: user })
    } catch (error) {
        return res.status(500).json({ message: "Failed to get user" })
    }
}
export const edit = async (req, res) => {
    try {
        const userId = req.params.id;
        const { password, avatar, ...inputs } = req.body;
        let updatedPassword;
        const authenticatedUserId = req.userId;

        if (userId !== authenticatedUserId) return res.status(403).json({ message: "Unauthorized" });

        if (password)
            updatedPassword = await bcrypt.hash(password, 12)

        // const uploadResult = await cloudinary.uploader.upload(req.body.avatar);
        const updatedUser = await prisma.user.update({
            where: { id: userId },
            data: {
                ...inputs,
                ...(updatedPassword && { password: updatedPassword }),
                ...(avatar && { avatar })
            },
            select: {
                id: true,
                username: true,
                email: true,
                avatar: true
            }
        });
        return res.status(200).json({ data: updatedUser });
    } catch (error) {
        return res.status(500).json({ message: "Failed to edit user" })
    }
}
export const remove = async (req, res) => {
    try {
        const userId = req.params.id;

        const authenticatedUserId = req.userId;

        if (userId !== authenticatedUserId) return res.status(403).json({ message: "Unauthorized" });
        await prisma.user.delete({ where: { id: userId } });
        return res.status(200).json({ message: "User deleted successfully" })
    } catch (error) {
        return res.status(500).json({ message: "Failed to remove user" })
    }
}
export const getAll = async (req, res) => {
    try {
        const users = await prisma.user.findMany({
            select:
            {
                id: true,
                username: true,
                email: true,
                avatar: true,
                createdAt: true
            }
        });
        return res.status(200).json({ data: users })
    } catch (error) {
        return res.status(500).json({ message: "Failed to get users" })
    }
}
