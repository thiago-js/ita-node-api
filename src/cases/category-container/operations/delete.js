import { CategoryModel } from '../models/category'

const deleteCategory = async (req, res) => {
    try {
        const response = await CategoryModel.findByIdAndRemove(req.params.id)

        const message = {
            message: 'Category successfully deleted',
            id: response._id,
        }

        return res.status(200).send(message)
    } catch (error) {
        res.status(400).send({ message: 'Erro ao tentar deletar a categoria' })
    }
}

export default deleteCategory
