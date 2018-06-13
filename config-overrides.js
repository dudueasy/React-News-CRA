const xx = require('babel-plugin-react-html-attrs')

const { injectBabelPlugin } = require('react-app-rewired');


module.exports = function override(config, env) {
    config = injectBabelPlugin(xx, config)
    config = injectBabelPlugin(['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }], config);

    return config;
}