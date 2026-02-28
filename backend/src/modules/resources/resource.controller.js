import {createResource,getResourcesByCourse,deleteResource} from './resource.service.js';
import {createResourceSchema} from './resources.validation.js';


export const create=async(req,res)=>{
    try {

        const userId=req.user.id;
        const courseId=req.params.courseId;

        const validatedData=createResourceSchema.parse(req.body);

        const resource=await createResource(userId,courseId,validatedData);

        return res.status(201).json({
            message:'Resource created successfully',
            resource
        });

    } catch (error) {
        return res.status(400).json({message:error.message});
    }
};


export const list=async(req,res)=>{
    try {

        const courseId=req.params.courseId;

        const resources=await getResourcesByCourse(courseId);

        return res.status(200).json({
            resources
        });

    } catch (error) {
        return res.status(400).json({message:error.message});
    }
};


export const remove=async(req,res)=>{
    try {

        const userId=req.user.id;
        const resourceId=req.params.resourceId;

        await deleteResource(userId,resourceId);

        return res.status(200).json({
            message:'Resource deleted successfully'
        });

    } catch (error) {
        return res.status(400).json({message:error.message});
    }
};