import { getAllOrganizations, createOrganization, assignOrganizer } from "./organization.services.js";
import { createOrganizationSchema, assignOrganizerSchema } from "./organization.validator.js";


/*
  Create Organization
*/
export const create = async (req, res) => {
    try {
        const validatedData = createOrganizationSchema.parse(req.body);

        const organization = await createOrganization(validatedData);

        return res.status(201).json({
            success: true,
            message: "Organization created successfully",
            data: organization
        });

    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message
        });
    }
};


/*
  Assign Organizer
*/
export const assign = async (req, res) => {
    try {
        const orgId = req.params.id;

        const validatedData = assignOrganizerSchema.parse(req.body);

        const result = await assignOrganizer(orgId, validatedData.userId);

        return res.status(200).json({
            success: true,
            message: "Organizer assigned successfully",
            data: result
        });

    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message
        });
    }
};


/*
  List All Organizations
*/
export const list = async (req, res) => {
    try {
        const organizations = await getAllOrganizations();

        return res.status(200).json({
            success: true,
            data: organizations
        });

    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message
        });
    }
};
