import prisma from "../lib/prisma.js";

// Get post

export const get = async (req, res) => {
    try {
        const post = await prisma.post.findUnique({
            where: { id: req.params.id },
            include: {
                postDetails: true,
                user: {
                    select: {
                        id: true,
                        username: true,
                        avatar: true,
                    }
                }
            }
        });

        if (!post) {
            return res.status(404).json({ message: "Post not found" });
        }

        return res.status(200).json({ data: post });
    } catch (error) {
        console.error("Error fetching post:", error);
        return res.status(500).json({ message: "Failed to get post" });
    }
};

export const add = async (req, res) => {
    try {
        const authenticatedUserId = req.userId;
        const { postData, postDetails } = req.body;
        if (!postData.title || !postData.price) {
            return res.status(400).json({ message: "Title and price are required" });
        }
        // Create the Post
        const newPost = await prisma.post.create({
            data: {
                ...postData,
                userId: authenticatedUserId
            }
        });

        // Create the PostDetails, linking it to the newly created Post
        const newPostDetails = await prisma.postDetails.create({
            data: {
                ...postDetails,
                postId: newPost.id
            }
        });

        return res.status(201).json({
            post: newPost,
            postDetails: newPostDetails
        });

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
