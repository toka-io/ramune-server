module.exports = function () {
  switch (process.env.NODE_ENV) {
    case 'development':
      return {
        'env': 'dev'
      };

    case 'production':
      return {
        'env': 'prod'
      };

    default:
      return {
        error or other settings
      };
  }
};