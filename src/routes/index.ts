import { Router } from 'express';

import api from './api/v1';

const router = Router();
router.use('/api/v1', api);

export default router;
