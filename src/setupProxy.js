const proxy = require("http-proxy-middleware");
 
module.exports = function(app) {
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