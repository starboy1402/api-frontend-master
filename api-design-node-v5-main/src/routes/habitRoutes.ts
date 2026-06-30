import { Router } from "express";
import {validateBody} from "../middleware/validation.ts";
import {z} from "zod";

const router = Router();

const createHabitSchema = z.object({
    name: z.string().min(2).max(100),
    description: z.string().max(200).optional()
});

router.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the Habit Tracker API'
    })
})

router.get('/:id', (req, res) => {
    const habitId = req.params.id;
    res.status(200).json({
        message: `Habit with ID ${habitId} retrieved successfully`
    })
})

router.post('/', validateBody(createHabitSchema), (req, res) => {
    res.status(201).json({
        message: 'Habit created successfully'
    })
})

router.delete('/:id', (req, res) => {
    const habitId = req.params.id;
    res.status(200).json({
        message: `Habit with ID ${habitId} deleted successfully`
    })
})


router.post('/:id/complete', (req, res) => {
    const habitId = req.params.id;
    res.status(200).json({
        message: `Habit with ID ${habitId} marked as completed`
    })
})

export default router;