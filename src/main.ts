import * as path from 'path';

import Server from './server';

const isDev = process.env.NODE_ENV === 'development';
const configName = isDev ? '.env.development' : '.env.production';
const configPath = path.join(__dirname, `../${configName}`);

const { config, expressApp } = Server.bootstrap(configPath);
const { PORT } = config;

expressApp.listen(PORT, () => {
  console.log('Server is listening on port:', PORT);
});
