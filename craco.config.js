const packageJson = require('./package.json');

module.exports = {
    webpack: {
        configure: (webpackConfig, { env, paths }) => {
            // Modify JavaScript filenames
            webpackConfig.output.filename = `static/js/[name].${packageJson.version}.js`;
            webpackConfig.output.chunkFilename = `static/js/[name].${packageJson.version}.chunk.js`;

            // Modify CSS filenames in production builds
            if (env === 'production') {
                webpackConfig.plugins.forEach(plugin => {
                    if (plugin.constructor.name === 'MiniCssExtractPlugin') {
                        plugin.options.filename = `static/css/[name].${packageJson.version}.css`;
                        plugin.options.chunkFilename = `static/css/[name].${packageJson.version}.chunk.css`;
                    }
                });
            }

            return webpackConfig;
        },
    },
};
