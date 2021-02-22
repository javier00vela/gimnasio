const shell =  require('./server/node_modules/shelljs/shell');

shell.echo('autorun app init...');
// shell.echo(' -- Server init --');
// shell.exec('cd server && npm start' , { async: true });
shell.echo(' -- Front init --');
shell.exec('cd public && ng serve' , { async: true });