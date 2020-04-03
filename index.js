import globalConfiguration from './config/global'
import express from 'express'
import './config/database'

const app = express()

// loading global configurations
globalConfiguration(app)

// create server
app.listen(3000, () => console.log(`Servidor executando na porta ${3000}`))
