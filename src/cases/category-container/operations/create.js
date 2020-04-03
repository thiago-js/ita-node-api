import { CategoryModel } from '../models/category'
import { UserModel } from '../../user-container'

const query = {}
query.dummy = false

const create = async (req, res) => {
    try {
        const response = await UserModel.findById(req.body.userid, query)

        if (response._id == req.body.userid) {
            await createCategory(req, res)
        } else {
            res.status(400).send({ message: 'Não é permitido cadastrar uma categoria sem o vinculo com o usuario' })
        }
    } catch (error) {
        res.status(400).send({ message: 'Erro ao tentar cadastrar a categoria' })
    }
}

const createCategory = async (req, res) => {
    try {
        const category = new CategoryModel({ ...req.body })

        res.status(201).send(await category.save())
    } catch (error) {
        res.status(400).send({ message: 'Não é permitido cadastrar uma categoria, que ja foi cadastrada' })
    }
}

export default create
