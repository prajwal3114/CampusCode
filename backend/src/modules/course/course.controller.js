import { createCourseSchema,orgParamSchema } from "./course.validation.js";
import { createCourse,getCourseByOrganization } from "./course.service.js";


export const create=async(req,res)=>{
    try {
        const userId=req.user.id;
        const orgId=req.params.id;
        const data=req.body;

        const validatedData=createCourseSchema.parse(data);
        const validatedOrgId=orgParamSchema.parse({id:orgId});

        const course=await createCourse(userId,validatedOrgId.id,validatedData);

        return res.status(201).json(course);

    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}


export const list=async(req,res)=>{
    try {
        const orgId=req.params.id;

        const validatedOrgId=orgParamSchema.parse({id:orgId});

        const courses=await getCourseByOrganization(validatedOrgId.id);

        return res.status(200).json(courses);

    } catch (error) {
        return res.status(400).json({ error:error.message });
    }
}
