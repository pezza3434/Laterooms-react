var bower_dir = __dirname + '/bower_components';

var config = {
    entry: ['./app/main.js'],
    output: {
        path: './build',
        filename: 'bundle.js'
    },

    module: {
        noParse: [],
        loaders: [{
            test: /\.js$/,
            loader: 'jsx-loader'
        },
        {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          optional: ['runtime'],
          stage: 0
        }
      }]
    }
};

module.exports = config;
