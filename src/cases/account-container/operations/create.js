import { accountModel } from '../models/account'
import { UserModel } from '../../user-container/models/user'

const create = async (req, res) => {
    try {
        const response = await UserModel.findById(req.body.userid)

        if (response) {
            await createAccount(req, res)
        } else {
            res.status(400).send({ message: 'userid invalido para a operação' })
        }
    } catch (error) {
        res.status(500).send({ message: error })
    }
}

const createAccount = async (req, res) => {
    try {
        const account = new accountModel({ ...req.body })

        res.status(201).send(await account.save())
    } catch (error) {
        console.log(error)
        res.status(500).send({ message: 'Conta ja cadastrada' })
    }
}

export default create
