import { accountModel } from '../models/account'

const getAll = async (req, res) => {
    try {
        const accounts = await accountModel.find({ userid: req.body.userid })

        const SummaryBalance = await accounts.reduce(async (acc, elem) => {
            return (await acc) + elem.balance
        }, 0)

        const response = {
            accounts,
            SummaryBalance,
        }

        res.send(response)
    } catch (error) {
        res.status(500).send('Erro ao tentar buscar as contas')
    }
}

export default getAll
