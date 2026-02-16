import prisma from '../../config/prisma.js';

/*
  Create Organization
*/
export const createOrganization = async (data) => {
    try {
        const organization = await prisma.organization.findUnique({
            where: { name: data.name }
        });

        if (organization) {
            throw new Error('Organization already exists');
        }

        const newOrganization = await prisma.organization.create({
            data: {
                name: data.name,
                description: data.description
            }
        });

        return {
            id: newOrganization.id,
            name: newOrganization.name,
            description: newOrganization.description,
            createdAt: newOrganization.createdAt
        };

    } catch (error) {
        throw error;
    }
};


/*
  Assign Organizer
*/
export const assignOrganizer = async (orgId, userId) => {
    try {
        const organization = await prisma.organization.findUnique({
            where: { id: orgId }
        });

        if (!organization) {
            throw new Error('Organization not found');
        }

        const user = await prisma.user.findUnique({
            where: { id: userId }
        });

        if (!user) {
            throw new Error('User not found');
        }

        await prisma.user.update({
            where: { id: userId },
            data: {
                role: "ORGANIZER",
                organizationId: orgId
            }
        });

        return { message: "Organizer assigned successfully" };

    } catch (error) {
        throw error;
    }
};


/*
  Get All Organizations
*/
export const getAllOrganizations = async () => {
    try {
        const organizations = await prisma.organization.findMany();
        return organizations;
    } catch (error) {
        throw error;
    }
};
