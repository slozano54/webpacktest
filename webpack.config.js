// Une constante webpack module webpack requis ! C'est un minimum !
const webpack = require("webpack");
// Une constante path pour la gestion des chemins vers les fichiers
const path = require("path");
// Pour faire du templating
const HtmlWebpackPlugin = require("html-webpack-plugin");
// Pour le nettoyage avant compilation
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
// Dashboard
const DashboardPlugin = require("webpack-dashboard/plugin");

// Paramétrage des entrées/sorties
// On travaille sur les fichiers de src et on compile dans dist
const config = {
    entry: "./src/index.js",
    output: {
      path: path.resolve(__dirname, "./dist"),
      filename: "./index.js"
    },
    // ça c'est la config pour devServer, lancé au `pnpm start`
    devServer: {
      open: true,
      openPage: 'index.html',
      // openPage: 'mathalea_amc.html',
      host: 'localhost',
      // on active le hot module replacement (HMR)
      hot: true
    },
    // La liste des fichiers à traiter
    module: {
      // chaque élément de ce tableau est un objet précisant une regexp pour savoir s'il faut appliquer la règle au fichier
      // et un loader qui doit traiter le fichier, cf https://webpack.js.org/loaders/
      // https://webpack.js.org/configuration/module/#modulerules
      rules: [
        {
          // test: /\.m?js$/,
          // exclude: /(node_modules|bower_components)/,          
          // use: {
          //   loader: 'babel-loader',
          //   options: {
          //     presets: ['@babel/preset-env']
          //   }
          // }
          // on ne veut passer par babel que notre code (et pas tout le code qu'on importe de node_modules)
          // la règle exclude: /node_modules\// marche pas forcément, à cause des symlinks (et pnpm en met partout, c'est aussi ça qui le rend efficace)
          // on procède plutôt en limitant à ce qui est chez nous
          test: /\.js$/,
          include: path.resolve(__dirname, 'src', 'js'),
          // pas la peine d'exclure assets/externalJs car il est pas dans l'include
          loader: 'babel-loader'
          },
          {
            test: /\.s[ac]ss$/i,
            use: [
              'style-loader',
              'css-loader',
              'sass-loader',
            ],
          },          
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html'
      }),
      new CleanWebpackPlugin(),
      new DashboardPlugin()
    ]    
  }
  
  module.exports = config;