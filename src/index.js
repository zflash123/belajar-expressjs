import express, { query } from "express";

const app = express();

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.listen(3000, () => {
    console.log("This App run on http://localhost:3000")
})


app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/welcome', (req, res) => {
    res.send(`Hi ${req.query.name}`)
})

app.post('/profile', (req, res) => {
    res.json({'name': `${req.body.name}`})
    // res.json(req.body)
})



app.route('/test')
    .get((req, res, next) => {
        res.json({"message": "Ini Response Method GET"})
    })

    .post((req, res, next) => {
        res.json({"message": "Ini Response Method POST"})
    })