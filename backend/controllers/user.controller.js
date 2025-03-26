import bcrypt from "bcrypt"

// import { CloudinaryStorage } from "multer-storage-cloudinary";
import prisma from "../lib/prisma.js";
// import cloudinary from "../lib/cloudinaryConfig.js"; // Import Cloudinary config
// import multer from "multer";
// import fs from "fs";

// // Configure Cloudinary storage
// const storage = new CloudinaryStorage({
//     cloudinary,
//     params: {
//         folder: "user_avatars",
//         allowed_formats: ["jpg", "png", "jpeg"],
//     },
// });

// // Configure multer for local storage
// const upload = multer({ dest: "uploads/" });

// export const edit = async (req, res) => {
//     try {
//         const userId = req.params.id;
//         const { password, ...inputs } = req.body;
//         let updatedPassword;
//         const authenticatedUserId = req.userId;

//         if (userId !== authenticatedUserId) {
//             return res.status(403).json({ message: "Unauthorized" });
//         }

//         if (password) {
//             updatedPassword = await bcrypt.hash(password, 12);
//         }

//         let avatarUrl;

//         if (req.file) {
//             // Upload the new image to Cloudinary
//             const uploadResult = await cloudinary.uploader.upload(req.file.path, {
//                 folder: "user_avatars",
//                 public_id: `avatar_${userId}`,
//                 overwrite: true,
//             });

//             avatarUrl = uploadResult.secure_url;
//             // Delete the locally stored image after upload
//             fs.unlinkSync(req.file.path);
//         }

//         const updatedUser = await prisma.user.update({
//             where: { id: userId },
//             data: {
//                 ...inputs,
//                 ...(updatedPassword && { password: updatedPassword }),
//                 ...(avatarUrl && { avatar: avatarUrl }),
//             },
//             select: {
//                 id: true,
//                 username: true,
//                 email: true,
//                 avatar: true,
//             },
//         });

//         return res.status(200).json({ data: updatedUser });
//     } catch (error) {
//         console.error(error);
//         return res.status(500).json({ message: "Failed to edit user" });
//     }
// };

// // Multer middleware for handling file uploads
// export const uploadMiddleware = upload.single("avatar");
export const get = async (req, res) => {
    try {
        const user = await prisma.user.findUnique({ where: { id: req.params.id } })
        return res.status(200).json({ data: user })
    } catch (error) {
        return res.status(500).json({ message: "Failed to get user" })
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
