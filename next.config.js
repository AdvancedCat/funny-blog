// @ts-check

/**
 * @type {import('next').NextConfig}
 **/

module.exports = {
    async rewrites() {
        return [
            // {
            //     source: '/api/:version/:rest*',
            //     destination: '/api/:rest*?version=:version',
            // },
        ];
    },
    // add custom headers for all routes
    // 如果要针对请求级别添加头部，则在业务代码中添加
    async headers() {
        return [
            {
                source: '/:path*',
                headers: [
                    {
                        key: 'X-DNS-Prefetch-Control',
                        value: 'on',
                    },
                ],
            },
        ];
    },
    experimental: {
        images: {
            unoptimized: true,
        },
    },
};
