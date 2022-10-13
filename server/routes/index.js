import { Router } from "express";
import userRoutes from './auth.js'

const router = Router();

router.use(userRoutes);

export default router;
