import prisma from '../../config/prisma.js';

export const register=async(userId,competitionId)=>{
    try {
        const competition=await prisma.competition.findUnique({
            where:{ id: competitionId }
        });
        if(!competition)
        {
            throw new Error('competition not found');
        }

        const user=await prisma.user.findUnique({
            where:{ id:userId }
        });
        if(!user)
        {
            throw new Error('user not found');
        }

        const participations=await prisma.participation.findUnique({
            where:{
                userId_competitionId:{
                    userId,
                    competitionId
                }
            }
        });

        if(participations)
        {
            throw new Error('already registered');
        }

        const newparticipation=await prisma.participation.create({
            data:{
                userId,
                competitionId
            }
        });

        return newparticipation;

    } catch (error) {
        throw new Error(error.message);
    }
};


export const submitScore=async(adminUserId,targetUserId,competitionId,score)=>{
    try {
        const admin=await prisma.user.findUnique({
            where:{ id:adminUserId }
        });

        if(!admin)
        {
            throw new Error('user not found');
        }

        if(admin.role!=='ADMIN' && admin.role!=='ORGANIZER')
        {
            throw new Error('forbidden');
        }

        const participation=await prisma.participation.findUnique({
            where:{
                userId_competitionId:{
                    userId:targetUserId,
                    competitionId
                }
            }
        });

        if(!participation)
        {
            throw new Error('participation not found');
        }

        const updated=await prisma.participation.update({
            where:{
                userId_competitionId:{
                    userId:targetUserId,
                    competitionId
                }
            },
            data:{ score }
        });

        return updated;

    } catch (error) {
        throw new Error(error.message);
    }
};


export const getParticipants=async(competitionId)=>{
    try {
        const competition=await prisma.competition.findUnique({
            where:{ id:competitionId }
        });

        if(!competition)
        {
            throw new Error('competition not found');
        }

        const participations=await prisma.participation.findMany({
            where:{ competitionId },
            include:{ user:true },
            orderBy:{ score:'desc' }
        });

        return participations;

    } catch (error) {
        throw new Error(error.message);
    }
};
