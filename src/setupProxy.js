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
    app.use(
      proxy("/ying/**", {
        target: " https://ticket-m.mtime.cn/",
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          "^/ying": "/"
        }
        })
    );
    app.use(
      proxy("/movie/**", {
        target: "https://ticket-api-m.mtime.cn/",
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          "^/movie": "/"
        }
      })
    );
};