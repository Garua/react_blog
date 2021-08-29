const CracoLessPlugin = require('craco-less');
const {
    override,
    addDecoratorsLegacy,
    fixBabelImports,
} = require("customize-cra")

// 装饰器模式
module.exports=override(
    addDecoratorsLegacy()
)

const modifyVars = require("./theme/theme")

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars,
                        javascriptEnabled: true,
                        style:true
                    },
                },
            },
        },
    ],
};
