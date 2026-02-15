import { getProfile, updateProfile, changePassword as changePasswordService } from "./user.services.js";
import { updateProfileSchema, changePasswordSchema } from "./user.validation.js";

/*
  Get Profile
*/
export const profile = async (req, res) => {
    try {
        const userId = req.user.id;

        const user = await getProfile(userId);

        return res.status(200).json(user);

    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

/*
  Update Profile
*/
export const update = async (req, res) => {
    try {
        const userId = req.user.id;

        const validation = updateProfileSchema.safeParse(req.body);

        if (!validation.success) {
            return res.status(400).json({ message: validation.error.errors[0].message });
        }

        const updatedUser = await updateProfile(userId, validation.data);

        return res.status(200).json(updatedUser);

    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

/*
  Change Password
*/
export const changePassword = async (req, res) => {
    try {
        const userId = req.user.id;

        const validation = changePasswordSchema.safeParse(req.body);

        if (!validation.success) {
            return res.status(400).json({ message: validation.error.errors[0].message });
        }

        await changePasswordService(userId, validation.data);

        return res.status(200).json({ message: "Password changed successfully" });

    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};
