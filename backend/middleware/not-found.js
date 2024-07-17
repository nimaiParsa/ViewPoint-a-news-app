const notFoundMiddleware = (req, res, next) => {
    res.status(404).send('the page is not found')
}

module.exports = notFoundMiddleware