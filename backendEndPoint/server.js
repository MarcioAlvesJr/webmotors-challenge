const axios = require('axios')
const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors({
    origin:"http://localhost:3000"
}))
app.use(express.urlencoded({extended: true}))


const API_ADRESS = "https://desafioonline.webmotors.com.br/api/OnlineChallenge/"

app.get('/api/OnlineChallenge/Make', async (req, res)=>{
    try{
        const {data} = await axios.get( API_ADRESS + "Make")

        res.send(data)
    }catch(e){
        res.status(500).send(e.message)
    }
})
app.get('/api/OnlineChallenge/Model', async (req, res)=>{
    try{
        const {data} = await axios.get( API_ADRESS + `Model?MakeID=${req.query.MakeID}`)

        res.send(data)
    }catch(e){
        res.status(500).send(e.message)
    }
})
app.get('/api/OnlineChallenge/Version', async (req, res)=>{
    try{
        const {data} = await axios.get( API_ADRESS + `Version?ModelID=${req.query.ModelID}`)

        res.send(data)
    }catch(e){
        res.status(500).send(e.message)
    }
})
app.get('/api/OnlineChallenge/Vehicles', async (req, res)=>{
    try{
        const {data} = await axios.get( API_ADRESS + `Vehicles?Page=${req.query.Page}`)

        res.send(data)
    }catch(e){
        res.status(500).send(e.message)
    }
})

app.listen(3001)