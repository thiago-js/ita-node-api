import { UserModel } from '../models/user'

const deleteUser = async (req, res) => {
    try {
        const response = await UserModel.findByIdAndRemove(req.params.id)
        const message = {
            message: 'user successfully deleted',
            id: response._id,
        }

        return res.status(200).send(message)
    } catch (error) {
        res.status(500).send({ message: 'Erro ao tentar deletar o usuario' })
    }
}

export default deleteUser
