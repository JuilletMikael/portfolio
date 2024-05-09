/** @type {import('next').NextConfig} */
const nextConfig = {
    //output: 'export',
    images: { unoptimized: true },
    skipTrailingSlashRedirect: true,
    trailingSlash: true,

};

export default nextConfig;
