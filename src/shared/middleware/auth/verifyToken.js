import jwt, { decode } from 'jsonwebtoken'

const { AUTH_SECRET_KEY } = process.env

const verifyToken = async (req, res, next) => {
    try {
        var token = req.header('Authorization')

        if (!token) return res.status(401).send({ auth: false, message: 'Token não fornecido para o request' })

        const decoded = await jwt.verify(token, AUTH_SECRET_KEY)

        const {
            _doc: { _id: userid },
        } = decoded

        req.body.userid = userid

        next()
    } catch (error) {
        return res.status(500).send({ auth: false, message: 'falha na authenticação do token' })
    }
}

export default verifyToken
