import express from 'express'
import path from 'path'
import webpack 							from 'webpack'
import webpack_config 					from '../webpack/development'
import webpack_dev_middleware 			from 'webpack-dev-middleware'
import webpack_hot_middleware 			from 'webpack-hot-middleware'

const port = process.env.PORT || 3000
const environment = process.env.NODE_ENV || 'development'
const app = express()
const webpack_compiler = webpack(webpack_config)

app.set('views', path.join(__dirname, '../jade'))
app.set('view engine', 'jade')

app.use(express.static(path.join(__dirname, '../../public')));
app.use(webpack_dev_middleware(webpack_compiler, {
	publicPath: webpack_config.output.publicPath,
	stats: { colors: true },
	historyApiFallback: true
}))
app.use(webpack_hot_middleware(webpack_compiler, {
	log: console.log
}))

app.get('/', function(req, res) {
    res.render('index');
});

app.get('/:page', function(req, res) {
    if(req.params.page != 'pages'){
        res.render('index');
    }
});

app.get('/pages/:name', function (req, res) {
    res.render('pages/' + req.params.name);
});

app.listen(port, function(){
	console.log("Express server listening on port "+ port +" in "+ environment +" mode");
});
