import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config = {
  mode: 'production',
  entry: './src/index.ts',
  resolve: {
    extensions: ['.tsx', '.ts', 'jsx', 'js']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript']
            }
          },
          'ts-loader'
        ],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader'
        ]
      }
    ]
  },
  externals: {
    react: 'react',
    'react-dom': 'react-dom',
    'framer-motion': 'framer-motion'
  }
};

const configCJS = {
  ...config,
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'commonjs2'
  }
};

const configESM = {
  ...config,
  output: {
    filename: 'index.esm.mjs',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'module'
  },
  experiments: {
    outputModule: true
  }
};

export default [configCJS, configESM];
