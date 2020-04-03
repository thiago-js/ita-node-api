import mongoose from 'mongoose'

const { DB_HOST, DB_PORT, DB_DATABASE } = process.env

mongoose.connect(`mongodb://${DB_HOST}:${DB_PORT}/${DB_DATABASE}`, {
    useCreateIndex: true,
    useNewUrlParser: true,
})

mongoose.connection.on('error', () => console.log('connection error'))
mongoose.connection.once('open', () => console.log('database connected'))
