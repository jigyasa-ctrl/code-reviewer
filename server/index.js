import express from "express"
import cors from 'cors'
import generateReview from "./review.js"
// const express = require("express");
const app = express();
const port = 3000;

app.use(express.json())
app.use(cors())


app.post('/api/v1/reviews', async (req, res) => {
    const code = req.body.code;
    try {
        console.log(code)
        const review = await generateReview(code)
        return res.send({
            review
        })
    } catch (error) {
        console.log(error)
       return res.status(500).send({
        message: "Some error occured please try again later"})
    }
    
   
})

app.listen(port, () =>{
    console.log("server is running at port" + port)
})