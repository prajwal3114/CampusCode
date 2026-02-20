import { submitAttempt, getUserSubmissions } from './submission.service.js';


export const submit = async (req, res) => {
    try {

        const userId = req.user.id;
        const competitionId = req.params.id;
        const score = req.body.score;

        if (typeof score !== 'number') {
            return res.status(400).json({ message: 'Score must be a number' });
        }

        const submission = await submitAttempt(userId, competitionId, score);

        return res.status(201).json({
            message: 'Submission successful',
            submission
        });

    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};


export const mySubmissions = async (req, res) => {
    try {

        const userId = req.user.id;
        const competitionId = req.params.id;

        const submissions = await getUserSubmissions(userId, competitionId);

        return res.status(200).json({
            submissions
        });

    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};