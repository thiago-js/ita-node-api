import { Router } from 'express'
import { create, deleteAccount, getAll } from '.'

const AccountRouter = () => {
    const router = Router()

    router.post('/account', create)
    router.delete('/account/:id', deleteAccount)
    router.get('/accounts', getAll)

    return router
}

export default AccountRouter
