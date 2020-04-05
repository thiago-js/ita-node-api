import { TransactionModel } from '../models/transaction'
import { accountModel } from '../../account-container'

const getByFilter = async (req, res) => {
    try {
        let filter = { userid: req.body.userid }

        if (req.body.accountid != undefined && req.body.accountid != '') filter['_id'] = req.body.accountid

        const accounts = await accountModel.find(filter)

        const accountBalance = await accounts.reduce(async (acc, elem) => {
            return (await acc) + elem.balance
        }, 0)

        const transactions = await TransactionModel.find(dynamicQuery(req))

        const transactionBalance = await transactions.reduce(async (acc, elem) => {
            if (elem.type == 'expense') return (await acc) - elem.value
            else return (await acc) + elem.value
        }, accountBalance)

        res.status(200).send({
            transactions,
            accountBalance,
            totalBalance: transactionBalance,
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({ message: 'Erro ao tentar Obter as transações' })
    }
}

const dynamicQuery = req => {
    let filter = {}

    if (req.body.accountid != undefined && req.body.accountid != '') filter['accountid'] = req.body.accountid
    if (req.body.tag != undefined && req.body.tag != '') filter['tag'] = req.body.tag
    if (req.body.title != undefined && req.body.title != '') filter['title'] = req.body.title
    if (req.body.type != undefined && req.body.type != '') filter['type'] = req.body.type

    console.log(filter)

    return filter
}

export default getByFilter
