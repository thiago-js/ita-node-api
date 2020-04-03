import { TransactionModel } from '../models/transaction'

const getAll = async (req, res) => {
    try {
        res.send(await TransactionModel.find({ userid: req.body.userid }))
    } catch (error) {
        res.status(500).send({ message: 'Erro ao tentar Obter as transações' })
    }
}

export default getAll
