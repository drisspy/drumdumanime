
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['bY9texaDRKkDpMB8TD4kKg'] // An array of project ids.
});
module.exports = withPlasmic({
  eslint: {
    ignoreDuringBuilds: true,
  },
  trailingSlash: true,
  // Your NextJS config.
});
  