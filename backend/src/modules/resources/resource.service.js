import prisma from '../../config/prisma.js';

export const createResource=async(userId,courseId,data)=>{
    try {

        const course=await prisma.course.findUnique({
            where:{id:courseId}
        });

        if(!course)
        {
            throw new Error('Course not found');
        }

        const user=await prisma.user.findUnique({
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
        else
        {
            throw new Error('Forbidden');
        }

        const resource=await prisma.resource.create({
            data:{
                title:data.title,
                description:data.description,
                type:data.type,
                url:data.url,
                courseId:courseId
            }
        });

        return resource;

    } catch (error) {
        throw error;
    }
};


export const getResourcesByCourse=async(courseId)=>{
    try {

        const course=await prisma.course.findUnique({
            where:{id:courseId}
        });

        if(!course)
        {
            throw new Error('Course not found');
        }

        const resources=await prisma.resource.findMany({
            where:{courseId},
            orderBy:{createdAt:'desc'}
        });

        return resources;

    } catch (error) {
        throw error;
    }
};


export const deleteResource=async(userId,resourceId)=>{
    try {

        const resource=await prisma.resource.findUnique({
            where:{id:resourceId},
            include:{course:true}
        });

        if(!resource)
        {
            throw new Error('Resource not found');
        }

        const user=await prisma.user.findUnique({
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
            if(user.organizationId!==resource.course.organizationId)
            {
                throw new Error('Forbidden');
            }
        }
        else
        {
            throw new Error('Forbidden');
        }

        await prisma.resource.delete({
            where:{id:resourceId}
        });

        return true;

    } catch (error) {
        throw error;
    }
};