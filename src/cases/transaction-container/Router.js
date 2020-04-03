import { Router } from 'express'
import { create, update, deleteTransation, getAll, getById } from './'

const TransactionRouter = () => {
    const router = Router()

    router.get('/transaction', getAll)
    router.post('/transaction', create)
    router.get('/transaction/:id', getById)
    router.put('/transaction/:id', update)
    router.delete('/transaction/:id', deleteTransation)

    return router
}

export default TransactionRouter
