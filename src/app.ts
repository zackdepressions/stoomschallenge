import express from 'express'
import { router } from './routes'
import cors from 'cors'
import bodyParser from 'body-parser'
import path from 'path'

const app = express()
app.use(cors({ origin: "*", preflightContinue: false, optionsSuccessStatus: 200 }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ strict: true }));
app.use(bodyParser.raw());
app.use(express.json())
app.use(router)
app.use('/public/assets', express.static(path.join(__dirname, './') + 'public\\assets'));

export { app }