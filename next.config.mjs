/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns: [
            {
              protocol: 'https',
              hostname: '83xwn2h6n01pgdgq.public.blob.vercel-storage.com',
              port: '',
              pathname: '/**',
            },
          ],
    }
};

export default nextConfig;
