import express from 'express';
import path from 'path';

const app = express();
const port = 3000;


app.get('/', (req, res) => {
    const data = path.join(import.meta.dirname,'public','index.html');
    res.sendFile(data);
})
app.get('/style.css', (req, res) => {
    const data = path.join(import.meta.dirname,'public','style.css');
    res.sendFile(data);
});
app.get('/data',async (req,res)=>{
    try {
        const data = await fetch('http://universities.hipolabs.com/search?country=United+States');
        const universities = await data.json();
        return res.json(universities);
    } catch (error) {
        return res.sendError(error);
    }
})

app.listen(port,()=>{
    console.log("Server is running on port 3000");
})