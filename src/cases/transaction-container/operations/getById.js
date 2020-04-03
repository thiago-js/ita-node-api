import { TransactionModel } from '../models/transaction'

const getAll = async (req, res) => {
    try {
        res.send(await TransactionModel.findById(req.params.id))
    } catch (error) {
        res.status(500).send({ message: `Erro ao tentar Obter essa transação : id -> ${req.params.id}` })
    }
}

export default getAll
