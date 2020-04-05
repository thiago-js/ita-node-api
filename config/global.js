import bodyParser from 'body-parser'
import morgan from 'morgan'

import { TransactionRouter } from '../src/cases/transaction-container/'
import { UserRouter, UserNoAuthRouter } from '../src/cases/user-container/'
import { CategoryRouter } from '../src/cases/category-container/'
import { AccountRouter } from '../src/cases/account-container/'
import { verifyToken } from '../src/shared/middleware/auth'

const globalConfiguration = app => {
    app.use(morgan('dev'))
    app.set('json spaces', 4)
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*')
        res.header('Access-Control-Allow-Headers', '*')
        next()
    })
    app.use(UserNoAuthRouter())
    app.use(verifyToken)
    app.use(UserRouter())
    app.use(CategoryRouter())
    app.use(TransactionRouter())
    app.use(AccountRouter())
}

export default globalConfiguration
