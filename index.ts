import bodyParser from 'body-parser'
import cors from 'cors'
import path from 'path'
import express, { Application, Request, Response } from 'express'
import { mongoose } from './server/config'
import router from './server/routes'

const app: Application = express()
const PORT = process.env.PORT || 8080
const db = mongoose.connection

db.on('error', (err: string) => {
    console.log('err', err)
})

db.on('open', () => {
    console.log('DB running')
})

app.use(express.urlencoded({ limit: '10000mb', extended: true }))
app.use(express.static(path.join(__dirname, './client/build')))

app.use(bodyParser.json())
app.use(cors())
app.use(express.json())

app.get('/*', (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, './client/build/index.html'))
})

app.use('/api', router)

app.listen(PORT, () => {
    console.log(`Server up and running on ${PORT}`)
})