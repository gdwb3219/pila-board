const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api/posts", {
      target: "{http://192.168.121.143:8000}", // http://localhost:3080
      changeOrigin: true,
    })
  );
};
