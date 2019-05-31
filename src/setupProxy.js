const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(proxy('/psh/**', { 
       target: 'https://m.mtime.cn',
       secure:false,
       changeOrigin: true,
       pathRewrite: {
        "^/psh": "/"
       },
        // cookieDomainRewrite: "http://localhost:4000"
    }));
};