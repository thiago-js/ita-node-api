import { accountModel } from '../models/account'

const deleteAccount = async (req, res) => {
    try {
        const response = await accountModel.findByIdAndRemove(req.params.id)

        const message = {
            message: 'Conta deletada com successo',
            id: response._id,
        }

        return res.status(200).send(message)
    } catch (error) {
        res.status(400).send({ message: 'Erro ao tentar deletar a Conta' })
    }
}

export default deleteAccount
