require('dotenv').config()
require('express-async-errors')

const cors = require('cors')
const express = require('express')
const app = express()

const connectDB = require('./db/connect')

const articleRouter = require('./routers/articles')
const authRouter = require('./routers/auth')

const auth = require('./middleware/authentication')
const notFoundMiddleware = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')

app.use(express.json())
app.use(cors())

app.use('/api/v1/', authRouter)
app.use('/api/v1/', auth, articleRouter)

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)


const port = process.env.PORT || 3000

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, () =>
            console.log(`Server is listening on port ${port}...`)
        );
    } catch (error) {
        console.log(error);
    }
}

start()