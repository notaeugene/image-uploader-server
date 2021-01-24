import { Router } from 'express';

import uploadsRoute from './uploads.route';

const router = Router();
router.use('/uploads', uploadsRoute);

export default router;
