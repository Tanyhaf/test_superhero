import { Router } from 'express';
import { superheroRouter } from './superheroRouter';

const router = Router();

router.use('/superheros', superheroRouter);
// router.use('/auth');

export const apiRouter = router;
