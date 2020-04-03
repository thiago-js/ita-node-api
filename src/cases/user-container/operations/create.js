import { UserModel } from '../models/user'

const create = async (req, res) => {
    const user = new UserModel({ ...req.body })

    try {
        res.status(200).send(await user.save())
    } catch (error) {
        res.status(500).send({ message: 'Erro ao tentar cadastrar o usuario' })
    }
}

export default create
