import { Router } from 'express';

import UploadsController from '../../../controllers/uploads.controller';

const router = Router();
const uploadsController = new UploadsController();

router.post('/', uploadsController.create);
router.get('/:id', uploadsController.findOne);
router.get('/', uploadsController.findAll);
router.put('/', uploadsController.update);
router.delete('/:id', uploadsController.delete);

export default router;
