// backend/src/application/positionService.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getCandidatesByPositionIdService = async (positionId: number) => {
    return prisma.application.findMany({
        where: { positionId },
        include: {
            candidate: true,
            interviews: true,
            interviewStep: true,
        },
    }).then(applications => applications.map(application => ({
        fullName: `${application.candidate.firstName} ${application.candidate.lastName}`,
        current_interview_step: application.interviewStep.name,
        average_score: application.interviews.reduce((acc, interview) => acc + (interview.score || 0), 0) / application.interviews.length,
    })));
};

export const updateCandidateStageService = async (candidateId: number, newStage: string) => {
  return prisma.application.update({
    where: { id: candidateId },
    data: { interviewStep: { update: { name: newStage } } },
    include: { candidate: true, interviewStep: true },
  });
};