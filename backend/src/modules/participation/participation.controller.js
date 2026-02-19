import { register as registerService,submitScore as submitScoreService,getParticipants } from "./participation.service.js";


export const register=async(req,res)=>{

    try {
        const userId=req.user.id;
        const competitionId=req.params.id;

        const newparticipation=await registerService(userId,competitionId);

        return res.status(201).json({
            message:'registered successfully',
            data:newparticipation
        });

    } catch (error) {
        return res.status(400).json({
            message:error.message
        });
    }
};


export const submitScore=async(req,res)=>{
    try {
        const competitionId=req.params.id;
        const targetUserId=req.body.userId;
        const score=req.body.score;
        const adminUserId=req.user.id;

        const updatedParticipation=await submitScoreService(
            adminUserId,
            targetUserId,
            competitionId,
            score
        );

        return res.status(200).json({
            message:'score submitted successfully',
            data:updatedParticipation
        });

    } catch (error) {
        return res.status(400).json({
            message:error.message
        });
    }
};


export const list=async(req,res)=>{
    try {
        const competitionId=req.params.id;

        const participants=await getParticipants(competitionId);

        return res.status(200).json({
            message:'participants retrieved successfully',
            data:participants
        });

    } catch (error) {
        return res.status(400).json({
            message:error.message
        });
    }
};
