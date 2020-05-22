const path = require('path');
const { generateTheme, getLessVars } = require('antd-theme-generator');

const options = {
  stylesDir: path.join(__dirname, './src/styles'),    //对应具体位置
  antDir: path.join(__dirname, './node_modules/ant-design-vue'), //对应具体位置
  varFile: path.join(__dirname, './src/styles/theme/index_vars.less'), //对应具体位置
  mainLessFile: path.join(__dirname, './src/styles/theme/index_default.less'), //对应具体位置
  themeVariables: [
    '@primary-color',
    '@secondary-color',
    '@text-color',
    '@text-color-secondary',
    '@heading-color',
    '@layout-body-background',
    '@btn-primary-bg',
    '@layout-header-background'
  ],
  indexFileName: 'index.html',
  outputFilePath: path.join(__dirname, './static/color.less'),
}

generateTheme(options).then(less => {
    console.log('Theme generated successfully');
})
.catch(error => {
    console.log('Error', error);
});