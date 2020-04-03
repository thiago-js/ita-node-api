import { Router } from 'express'
import { create, deleteCategory, getAll } from '.'

const CategoryRouter = () => {
    const router = Router()

    router.post('/category', create)
    router.delete('/category/:id', deleteCategory)
    router.get('/category', getAll)

    return router
}

export default CategoryRouter
