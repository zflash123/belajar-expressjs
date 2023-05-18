import express from "express";

const app = express();

app.listen(3000, () => {
    console.log('Server run on http://localhost:3000')
})

app.get('/', (req, res) => {
    if(req.query.name){
        res.status(200)
        res.set('Content-Type', 'text/html')
        res.send(`<h1>Hello ${req.query.name}</h1>`)
    } else{
        res.status(400)
        res.end()
    }
})