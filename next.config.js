module.exports = {
    async rewrites() {
        return [
            {
                source: '/api/:version/:rest*',
                destination: '/api/:rest*?version=:version',
            },
        ];
    },
};
