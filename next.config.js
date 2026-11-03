module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [{ source: '/projetos/jlvendas', destination: '/projetos/soma', permanent: true }];
  }
}
