import express from 'express';

import { all, save, findById, updateById, deleteById } from '../controllers/tasks.js';

const router = express.Router();

router.route('/').get(all).post(save);

router.route('/:id').get(findById).patch(updateById).delete(deleteById);

export default router;
