import { Router } from 'express'
import { create, deleteUser, login } from './'

const UserRouter = () => {
    const router = Router()

    router.delete('/user/:id', deleteUser)

    return router
}

const UserNoAuthRouter = () => {
    const router = Router()

    router.post('/auth', login)
    router.post('/user', create)

    return router
}

export { UserNoAuthRouter, UserRouter }
