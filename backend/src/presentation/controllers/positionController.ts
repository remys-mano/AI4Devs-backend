// backend/src/presentation/positionController.ts
import { Request, Response } from 'express';
import { getCandidatesByPositionIdService, updateCandidateStageService } from '../../application/services/positionService';

export const getCandidatesByPositionId = async (req: Request, res: Response) => {
    const positionId = parseInt(req.params.id, 10);
    if (isNaN(positionId)) {
        return res.status(400).json({ error: 'Invalid position ID' });
    }

    try {
        const candidates = await getCandidatesByPositionIdService(positionId);
        res.json(candidates);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

export const updateCandidateStage = async (req: Request, res: Response) => {
    const candidateId = parseInt(req.params.id, 10);
    const stage = req.body.stage;

    if (isNaN(candidateId) || !stage) {
        return res.status(400).json({ error: 'Invalid request data' });
    }

    try {
        const updatedCandidate = await updateCandidateStageService(candidateId, stage);
        res.json(updatedCandidate);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};