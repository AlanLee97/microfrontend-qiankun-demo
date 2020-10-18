const { name } = require('./package');


module.exports = {
  webpack: function override(config, env) {
    const copyConfig = { ...config };
    console.log('env', env);
    // copyConfig.output.library = `${name}-[name]`;
    // 出现Application died in status LOADING_SOURCE_CODE: You need to export the functional lifecycles in xxx entry的问题
    // 解决方案是手动把library的值设置为注册微应用时的名字react-app
    copyConfig.output.library = `react-app`;
    copyConfig.output.libraryTarget = 'umd';
    copyConfig.output.jsonpFunction = `webpackJsonp_${name}`;
    return config;
  },
  devServer: function(configFunction) {
    return function(proxy, allowedHost) {
      const config = configFunction(proxy, allowedHost);
      config.open = false;
      config.hot = false;
      config.headers = {
        'Access-Control-Allow-Origin': '*',
      };
      // Return your customised Webpack Development Server config.
      return config;
    };
  }
};

