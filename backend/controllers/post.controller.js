import prisma from "../lib/prisma.js";

// Get a single post by ID
export const get = async (req, res) => {
    try {
        const post = await prisma.post.findUnique({
            where: { id: req.params.id }
        });

        if (!post) {
            return res.status(404).json({ message: "Post not found" });
        }

        return res.status(200).json({ data: post });
    } catch (error) {
        return res.status(500).json({ message: "Failed to get post" });
    }
};

// Add a new post

export const add = async (req, res) => {
    try {
        const authenticatedUserId = req.userId; // User ID from token

        const newPost = await prisma.post.create({
            data: {
                ...req.body,
                userId: authenticatedUserId // Automatically assign userId
            }
        });

        return res.status(201).json({ data: newPost });
    } catch (error) {
        return res.status(500).json({ message: "Failed to add post" });
    }
};

// Delete a post
export const remove = async (req, res) => {
    try {
        const postId = req.params.id;
        const authenticatedUserId = req.userId;

        const post = await prisma.post.findUnique({ where: { id: postId } });

        if (!post) {
            return res.status(404).json({ message: "Post not found" });
        }

        if (post.userId !== authenticatedUserId) {
            return res.status(403).json({ message: "Unauthorized" });
        }

        await prisma.post.delete({ where: { id: postId } });

        return res.status(200).json({ message: "Post deleted successfully" });
    } catch (error) {
        return res.status(500).json({ message: "Failed to remove post" });
    }
};

// Get all posts
export const getAll = async (req, res) => {
    try {
        const posts = await prisma.post.findMany();
        return res.status(200).json({ data: posts });
    } catch (error) {
        return res.status(500).json({ message: "Failed to get posts" });
    }
};
