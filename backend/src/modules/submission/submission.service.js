import prisma from '../../config/prisma.js';

export const submitAttempt = async (userId, competitionId, score) => {
    try {

        return await prisma.$transaction(async (tx) => {

            const competition = await tx.competition.findUnique({
                where: { id: competitionId }
            });
            if (!competition) {
                throw new Error('Competition not found');
            }
            if (competition.status !== 'LIVE') {
                throw new Error('Competition is not live');
            }

            const user = await tx.user.findUnique({
                where: { id: userId }
            });

            if (!user) {
                throw new Error('User not found');
            }

            const participation = await tx.participation.findUnique({
                where: {
                    userId_competitionId: {
                        userId,
                        competitionId
                    }
                }
            });

            if (!participation) {
                throw new Error('User not registered for this competition');
            }

            const submission = await tx.submission.create({
                data: {
                    userId,
                    competitionId,
                    score
                }
            });

            if (score > participation.score) {
                await tx.participation.update({
                    where: {
                        userId_competitionId: {
                            userId,
                            competitionId
                        }
                    },
                    data: { score }
                });
            }

            return submission;

        });
    } catch (error) {
        throw error;
    }
};


export const getUserSubmissions = async (userId, competitionId) => {
    try {

        const competition = await prisma.competition.findUnique({
            where: { id: competitionId }
        });

        if (!competition) {
            throw new Error('Competition not found');
        }

        const submissions = await prisma.submission.findMany({
            where: {
                userId,
                competitionId
            },
            orderBy: {
                submittedAt: 'desc'
            }
        });

        return submissions;

    } catch (error) {
        throw error;
    }
};