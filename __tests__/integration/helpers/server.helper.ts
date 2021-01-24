import * as path from 'path';

import { Application } from 'express';

import Server from '../../../src/server';

const configPath = path.join(process.cwd(), '.env.test');

const createAppServer = (): Application => {
  const { expressApp } = Server.bootstrap(configPath);
  return expressApp;
};

export default createAppServer;
