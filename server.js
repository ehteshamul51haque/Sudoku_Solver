const PORT = 8000
const axios = require('axios').default
const express = require('express')
const cors = require('cors')
require('dotenv').config()
const app = express()
app.use(cors())
app.use(express.json())

app.post('/solve', (req, res) => {
    const options = {
        method: 'POST',
        url: 'https://sudoku-solver3.p.rapidapi.com/sudokusolver/',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': process.env.RAPID_API_KEY,
            'X-RapidAPI-Host': 'sudoku-solver3.p.rapidapi.com'
        },
        data: {
            input: req.body
        }
    };

    axios.request(options).then((response) => {
        console.log(response.data)
        res.json(response.data)
    }).catch((error) => {
        console.log(error)
    })
})
app.listen(PORT, () => console.log(`Server running on ${PORT}`))