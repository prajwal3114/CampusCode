import prisma from '../../config/prisma.js';

export const createCompetition=async(userId,courseId,data)=>{
    try {
        const course=await prisma.course.findUnique({
            where:{id:courseId}
        });
        if(!course)
        {
            throw new Error('Course not found');
        }

        const user= await prisma.user.findUnique({
            where:{id:userId}
        });
        if(!user)
        {
            throw new Error('User not found');
        }

        if(user.role==='ADMIN')
        {
            //allowed
        }
        else if(user.role==='ORGANIZER')
        {
            if(user.organizationId!==course.organizationId)
            {
                throw new Error('Forbidden');
            }
        }
        else{
            throw new Error('Forbidden');
        }

        const start=new Date(data.startDate);
        const end=new Date(data.endDate);

        if(start>=end)
        {
            throw new Error('Invalid date range');
        }

        const competition=await prisma.competition.create({
            data:{
                title:data.title,
                description:data.description,
                startDate:start,
                endDate:end,
                courseId:courseId
            }
        });

        return competition;

    } catch (error) {
        throw error;
    }
};


export const getCompetitionsByCourse=async(courseId)=>{
    try {

        const competitions=await prisma.competition.findMany({
            where:{courseId:courseId}
        });

        return competitions;

    } catch (error) {
        throw error;
    }
};


export const updateStatus=async(userId,competitionId,status)=>{
    try {

        const user=await prisma.user.findUnique({
            where:{id:userId}
        });

        if(!user || user.role!=='ADMIN')
        {
            throw new Error('Forbidden');
        }

        const competition=await prisma.competition.findUnique({
            where:{id:competitionId}
        });

        if(!competition)
        {
            throw new Error('Competition not found');
        }

        const updated=await prisma.competition.update({
            where:{id:competitionId},
            data:{status}
        });

        return updated;

    } catch (error) {
        throw error;
    }
};