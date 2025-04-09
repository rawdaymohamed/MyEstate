/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['res.cloudinary.com', 'plus.unsplash.com'],
        // loader: 'cloudinary',
        // path: 'https://res.cloudinary.com/my-username/image/upload',
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.pexels.com',
                pathname: '**',
            },
        ],

    },
};

export default nextConfig;
