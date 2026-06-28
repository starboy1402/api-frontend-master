import {Router} from "express";

const router = Router();


router.get('/', (req, res)=>{
    res.status(200).json({
        message: 'Welcome User to the Habit Tracker API'
    })
})

router.get('/:id', (req, res)=>{
    const userId = req.params.id;
    res.status(200).json({
        message: `User with ID ${userId} retrieved successfully`
    })
})

router.put('/:id', (req, res)=>{
    const userId = req.params.id;
    res.status(200).json({
        message: `User with ID ${userId} updated successfully`
    })
})

router.delete('/:id', (req, res)=>{
    const userId = req.params.id;
    res.status(200).json({
        message: `User with ID ${userId} deleted successfully`
    })
})

export default router;

