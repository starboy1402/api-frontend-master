import {Router} from "express";

const router = Router();

router.get( '/', (req, res)=>{
    res.status(200).json({
        message: 'Welcome to the Habit Tracker API'
    })
})

router.get('/:id', (req, res)=>{
    const habitId = req.params.id;
    res.status(200).json({
        message: `Habit with ID ${habitId} retrieved successfully`
    })
})

router.post('/', (req, res)=>{
    res.status(201).json({
        message: 'Habit created successfully'
    })
})

router.delete('/:id', (req, res)=>{
    const habitId = req.params.id;
    res.status(200).json({
        message: `Habit with ID ${habitId} deleted successfully`
    })
})

                        
router.post('/:id/complete', (req, res)=>{
    const habitId = req.params.id;
    res.status(200).json({
        message: `Habit with ID ${habitId} marked as completed`
    })
})

export default router;