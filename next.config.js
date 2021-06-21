const withTM = require('next-transpile-modules')(['emailjs-com']);

module.exports = withTM({
  images: {
    domains: ['portfoliostrapi.s3.eu-north-1.amazonaws.com'],
  },
});
