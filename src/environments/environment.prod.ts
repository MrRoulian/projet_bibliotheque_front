export const environment = {
  production: true,
  backend: {
    protocol: 'http',
    host: '127.0.0.1',
    port: '9000',
    endpoints: {
      allAlbum: '/api/album',
      oneAlbum: '/api/album/:id',
    }
  }
};
