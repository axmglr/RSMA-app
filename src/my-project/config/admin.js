module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'f256148f647553884c759041713e517d'),
  },
});
