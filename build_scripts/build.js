import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import chalk from 'chalk';

process.env.NODE_ENV = 'production';

console.log(chalk.blue('Generating bundle for Production'));

webpack(webpackConfig).run((err, stats)=>{
	if(err){
		console.log(chalk.red(err));
		return 1;
	}

	const jsonStats = stats.toJson();
	if(jsonStats.hasErrors){
		return jsonStats.errors.map(error=>console.log(chalk.red(error)));
	}
	console.log(`Webpack stats: ${stats}`);

	console.log(chalk.green('App is ready for Production'));

	return 0;
});
