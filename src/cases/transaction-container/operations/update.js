import { TransactionModel } from '../models/transaction'

const update = async (req, res) => {
    try {
        const response = await TransactionModel.findByIdAndUpdate(req.params.id, req.body)

        if (response._id == req.params.id) {
            res.send(getById(response._id))
        }
    } catch (error) {
        res.status(500).send({ message: `Erro ao tentar atualizar essa transação : id -> ${req.params.id}` })
    }
}

const getById = async id => {
    try {
        return await TransactionModel.findById(id)
    } catch (error) {
        res.status(500).send({ message: `Erro ao tentar atualizar essa transação : id -> ${req.params.id}` })
    }
}

export default update
