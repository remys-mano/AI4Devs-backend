// backend/src/routes/positionRoutes.ts
import { Router } from 'express';
import { getCandidatesByPositionId, updateCandidateStage } from '../presentation/controllers/positionController';

const router = Router();

router.get('/:id/candidates', getCandidatesByPositionId);
router.put('/candidate/:id', updateCandidateStage);

export default router;