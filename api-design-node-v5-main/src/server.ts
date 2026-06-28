 import express from 'express';

 const app = express();

 app.get('/health', (req, res)=> {

    res.send(
        "<button> click me </button>"
    )
    res.json({ message: 'Server is healthy and HELLO' }).
    status(200);
 })

 export default app;