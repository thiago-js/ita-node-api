import { TransactionModel } from '../models/transaction'

const deleteTransation = async (req, res) => {
    try {
        const response = await TransactionModel.findByIdAndRemove(req.params.id)
        const message = {
            message: 'Transaction successfully deleted',
            id: response._id,
        }

        return res.status(200).send(message)
    } catch (error) {
        res.status(400).send({ message: 'Erro ao tentar deletar uma transação' })
    }
}

export default deleteTransation
