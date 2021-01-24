import { Request, Response, NextFunction } from 'express';

import Controller from '../types/controller';

class UploadsController implements Controller {
  public create(req: Request, res: Response, next: NextFunction) {
    res.status(201).send('POST /uploads -> create');
  }

  public findOne(req: Request, res: Response, next: NextFunction) {
    res.send('GET /uploads -> findOne with id:' + req.params.id);
  }

  public findAll(req: Request, res: Response, next: NextFunction) {
    res.send('GET /uploads -> findAll');
  }

  public update(req: Request, res: Response, next: NextFunction) {
    res.send('PUT /uploads -> update');
  }

  public delete(req: Request, res: Response, next: NextFunction) {
    res.send('DELETE /uploads -> delete with id:' + req.params.id);
  }
}

export default UploadsController;
