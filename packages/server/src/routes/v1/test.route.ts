import express, { Request, Response } from 'express';
import * as testController from '../../controllers/test.controller';

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
  await testController.get(req, res);
});

export default router;
