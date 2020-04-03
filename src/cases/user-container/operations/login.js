import { UserModel } from '../models/user'
import { generateToken } from '../../../shared/middleware/auth'

const login = async (req, res) => {
    try {
        const user = await UserModel.findOne({ email: req.body.email, password: req.body.password })

        if (user) {
            res.send(await generateToken(user))
        } else {
            res.status(401).send({ message: 'usuario ou senha invalidos!' })
        }
    } catch (error) {
        res.status(500).send({ message: 'usuario ou senha invalidos!' })
    }
}

export default login
