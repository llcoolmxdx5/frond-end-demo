const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use('/api', proxy({
    target: 'http://localhost:3333',
    changeOrigin: true,
  }));
  app.use('/data', proxy({
    target: 'http://localhost:3333',
    changeOrigin: true,
  }))
};
