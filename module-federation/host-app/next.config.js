const deps = require('./package.json').dependencies

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  webpack(config, { webpack }) {
    config.plugins.push(
      new webpack.container.ModuleFederationPlugin({
        name: 'HostApp',
        fileName: 'remoteEntry.js',
        remotes:{
          'App1': 'App1@http://localhost:3001/remoteEntry.js',
        },
      })
    );

    return config;
  }
}

module.exports = nextConfig
