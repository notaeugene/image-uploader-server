import * as fs from 'fs';

import * as dotenv from 'dotenv';
import express, { Application } from 'express';

import ApplicationConfig from './types/application-config';
import routes from './routes';

class Server {
  private _singleton: Server;

  public config: ApplicationConfig;
  public expressApp: Application;

  constructor(configPath: string) {
    const path = fs.readFileSync(configPath);
    this.config = dotenv.parse(path) as ApplicationConfig;
    this.expressApp = express();
  }

  public static bootstrap(configPath: string): Server {
    if (!Server.prototype._singleton) {
      const server = new Server(configPath);
      const { config, expressApp } = server;

      // TODO: setup middlewares

      expressApp.use(routes);

      return server;
    }

    return Server.prototype._singleton;
  }
}

export default Server;
