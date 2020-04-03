import { TransactionModel } from '../models/transaction'
import { UserModel } from '../../user-container'
import { accountModel } from '../../account-container'

const create = async (req, res) => {
    try {
        const response = await UserModel.findById(req.body.userid)

        if (response) {
            await verifyAccount(req, res)
        } else {
            res.status(400).send({ message: 'userid invalido para a operação' })
        }
    } catch (error) {
        res.status(500).send({ message: error })
    }
}

const createTransaction = async (req, res) => {
    try {
        const transaction = new TransactionModel({ ...req.body })

        res.status(201).send(await transaction.save())
    } catch (error) {
        res.status(500).send({ message: 'Erro ao tentar criar uma transação' })
    }
}

const verifyAccount = async (req, res) => {
    try {
        const response = await accountModel.findById(req.body.accountid)

        if (response) {
            await createTransaction(req, res)
        } else {
            res.status(400).send({ message: 'accountid invalido para a operação' })
        }
    } catch (error) {
        res.status(500).send({ message: 'Erro ao tentar criar uma transação' })
    }
}

export default create
