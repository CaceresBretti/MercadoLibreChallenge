import express from 'express';
import itemCtrl from '../controllers/item.controller';

const router = express.Router();

router.route('/')
    .get(itemCtrl.getItems);

router.route('/:id')
    .get(itemCtrl.getItemById);

export default router;