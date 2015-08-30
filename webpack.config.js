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
        }, {
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel',
            query: {
                optional: ['runtime'],
                stage: 0
            }
        }, {
            test: /\.css$/,
            loader: "style-loader!css-loader"
        }, {
            test: /\.(ttf|eot|svg|woff2|woff)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: "file-loader"
        }]
    }
};

module.exports = config;
