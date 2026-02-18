import { getCompetitionsByCourse,createCompetition } from "./competitions.service.js";
import { createCompetitionSchema } from "./competitions.validation.js";


export const create=async (req,res)=>{
    try {
        const userId=req.user.id;
        const courseId=req.params.id;

        const validatedData=createCompetitionSchema.parse(req.body);

        const competition=await createCompetition(userId,courseId,validatedData);

        return res.status(201).json({
            message:'Competition created successfully',
            competition
        });

    } catch (error) {
        return res.status(400).json({message:error.message});
    }
};


export const list=async(req,res)=>{
    try {
        const courseId=req.params.id;

        const competitions=await getCompetitionsByCourse(courseId);

        return res.status(200).json({competitions});

    } catch (error) {
        return res.status(400).json({message:error.message});
    }
};
