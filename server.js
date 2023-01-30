const express = require('express')

const bodyParser = require('body-parser')
const cors= require('cors')
const babelPolyfill = require('babel-polyfill')
const nodeRouter = require('./routes/nodeRoute')


const app = express()


app.use(cors())


app.use(bodyParser.urlencoded({extended:false}))

app.use(bodyParser.json())



app.get('/', (req,res)=>{
res.send("Server started.........")
})

app.use("/api/v1",nodeRouter)

app.listen(process.env.PORT || 3000)
console.log('Server start')
