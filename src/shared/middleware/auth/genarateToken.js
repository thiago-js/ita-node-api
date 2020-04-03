import jwt from 'jsonwebtoken'

const { AUTH_SECRET_KEY } = process.env

const genarateToken = async model => {
    try {
        const token = await jwt.sign({ ...model }, AUTH_SECRET_KEY, { expiresIn: 60 * 60 })

        return {
            auth: true,
            name: model.name,
            access_token: token,
            expiresIn: 60 * 60,
        }
    } catch (error) {
        console.log(error)
    }
}

export default genarateToken
