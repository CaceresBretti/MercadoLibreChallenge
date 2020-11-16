import express from 'express';
import itemRoutes from './item.route';

const router = express.Router();

router.use('/items', itemRoutes);
router.get('/health-check', (req, res) => res.send('OK'));

export default router;