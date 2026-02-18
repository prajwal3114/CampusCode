import prisma from '../../config/prisma.js';

export const createCourse = async (userId, orgId, data) => {
    try {

        const org = await prisma.organization.findUnique({
            where: { id: orgId }
        });

        if (!org) {
            throw new Error('Organization not found');
        }

        const user = await prisma.user.findUnique({
            where: { id: userId }
        });

        if (!user) {
            throw new Error('User not found');
        }

        if (user.role === 'ADMIN') {
            //allowed
        } 
        else if (user.role === 'ORGANIZER') {
            if (user.organizationId !== orgId) {
                throw new Error('Forbidden');
            }
        } 
        else {
            throw new Error('Forbidden');
        }

        const course = await prisma.course.create({
            data: {
                name: data.name,
                description: data.description,
                organizationId: orgId
            }
        });

        return course;

    } catch (error) {
        throw error;
    }
};


export const getCourseByOrganization = async (orgId) => {
    try {

        const org = await prisma.organization.findUnique({
            where: { id: orgId }
        });

        if (!org) {
            throw new Error('Organization not found');
        }

        const courses = await prisma.course.findMany({
            where: { organizationId: orgId }
        });

        return courses;

    } catch (error) {
        throw error;
    }
};
