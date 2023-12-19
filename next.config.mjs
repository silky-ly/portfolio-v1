/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    basePath: '/portfolio',
    // async redirects() {
    //     return [
    //       {
    //         source: '/',
    //         destination: '/omono',
    //         basePath: false,
    //         permanent: false,
    //       },
    //     ]
    // },
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'images.unsplash.com',
          port: '',
          pathname: '/**',
        },
      ],
    },
    typescript: {
        ignoreBuildErrors: true,
      },
    eslint: {
        ignoreDuringBuilds: true,
      },
      productionBrowserSourceMaps: false,
      experimental: {
        serverComponentsExternalPackages: [],
      },
      
}

export default nextConfig
