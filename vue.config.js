module.exports = {
    devServer: {
        proxy: {
            '/sns': {
                target: 'https://m.maoyan.com',
                changeOrigin: true
            }

        }
    }
}