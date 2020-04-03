import { CategoryModel } from '../models/category'

const getAll = async (req, res) => {
    try {
        res.send(await CategoryModel.find({ userid: req.body.userid }))
    } catch (error) {
        res.status(500).send(error)
    }
}

export default getAll
