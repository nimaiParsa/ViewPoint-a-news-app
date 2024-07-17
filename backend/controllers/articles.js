const { getFromNDTV, getFromTH, getFromTOI } = require('../helpers/articles')
const Article = require('../models/Article')
const { StatusCodes } = require('http-status-codes')
const { NotFoundError } = require('../errors')

const getAllArticles = async (req, res) => {
    try {
        const savedArticles = await Article.find({ savedBy: req.user.userId })
        const fromTH = await getFromTH(0, 1)
        const fromTOI = await getFromTOI(0, 1)
        const fromNDTV = await getFromNDTV(0, 1)

        const articles = [...fromTH, ...fromTOI, ...fromNDTV]
            .map(item => {
                const article = savedArticles.find((saved) => saved.link == item.link)
                if (article) {
                    return {
                        link: article.link,
                        head: article.head,
                        para: article.para,
                        source: article.source,
                        id: article._id,
                        isSaved: true
                    }
                } else {
                    return {
                        ...item,
                        isSaved: false
                    }
                }
            })

        res.status(StatusCodes.OK).json({
            count: articles.length,
            userId: req.user.userId,
            articles
        })
    } catch (error) {
        console.log(error)
        res.status(500).send('some error occured')
    }
}

const getTHArticles = async (req, res) => {
    let { page } = req.query

    if (!page) {
        page = 1
    }

    const savedArticles = await Article.find({ savedBy: req.user.userId })

    const articles = (await getFromTH((page - 1) * 10, page * 10)).map(item => {
        const article = savedArticles.find((saved) => saved.link == item.link)
        if (article) {
            return {
                link: article.link,
                head: article.head,
                para: article.para,
                source: article.source,
                id: article._id,
                isSaved: true
            }
        } else {
            return {
                ...item,
                isSaved: false
            }
        }
    })


    res.status(StatusCodes.OK).json({
        count: articles.length,
        userId: req.user.userId,
        articles
    })
}

const getTOIArticles = async (req, res) => {
    let { page } = req.query

    if (!page) {
        page = 1
    }

    const savedArticles = await Article.find({ savedBy: req.user.userId })

    const articles = (await getFromTOI((page - 1) * 10, page * 10)).map(item => {
        const article = savedArticles.find((saved) => saved.link == item.link)
        if (article) {
            return {
                link: article.link,
                head: article.head,
                para: article.para,
                source: article.source,
                id: article._id,
                isSaved: true
            }
        } else {
            return {
                ...item,
                isSaved: false
            }
        }
    })


    res.status(StatusCodes.OK).json({
        count: articles.length,
        userId: req.user.userId,
        articles
    })
}

const getNDTVArticles = async (req, res) => {
    let { page } = req.query


    if (!page) {
        page = 1
    }

    const savedArticles = await Article.find({ savedBy: req.user.userId })

    const articles = (await getFromNDTV((page - 1) * 10, page * 10)).map(item => {
        const article = savedArticles.find((saved) => saved.link == item.link)
        if (article) {
            return {
                link: article.link,
                head: article.head,
                para: article.para,
                source: article.source,
                id: article._id,
                isSaved: true
            }
        } else {
            return {
                ...item,
                isSaved: false
            }
        }
    })


    res.status(StatusCodes.OK).json({
        count: articles.length,
        userId: req.user.userId,
        articles
    })
}

const getSavedArticles = async (req, res) => {
    let articles = await Article.find({ savedBy: req.user.userId }).sort('createdAt')

    articles = articles.map(article => {
        return {
            id: article._id,
            link: article.link,
            head: article.head,
            para: article.para,
            source: article.source,
            savedBy: article.savedBy,
            isSaved: true
        }
    })

    res.status(StatusCodes.OK).json({
        count: articles.length,
        userId: req.user.userId,
        articles
    })
}

const saveArticle = async (req, res) => {
    req.body.savedBy = req.user.userId
    const article = await Article.create(req.body)
    res.status(StatusCodes.CREATED).json({ article })
}

const deleteSavedArticle = async (req, res) => {
    const {
        user: { userId },
        params: { id },
    } = req

    const article = await Article.findByIdAndDelete({
        _id: id,
        createdBy: userId,
    })

    if (!article) {
        throw new NotFoundError(`No job with id ${articleId}`)
    }
    res.status(StatusCodes.OK).send()
}

module.exports = {
    getAllArticles,
    getTHArticles,
    getNDTVArticles,
    getTOIArticles,
    getSavedArticles,
    saveArticle,
    deleteSavedArticle
}