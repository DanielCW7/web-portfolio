/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: '',
    assetPrefix: '',
  
    // Existing configuration...
  
    webpack: (config, { isServer }) => {
      // Add a rule to handle PDF files
      config.module.rules.push({
        test: /\.(pdf)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'static', // This is where the PDF files will be stored in the build output
            },
          },
        ],
      });
  
      // Important: Return the modified config
      return config;
    },
  };
  
  module.exports = nextConfig;
  