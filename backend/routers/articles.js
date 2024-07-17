const express = require('express')
const router = express.Router()

const {
    getAllArticles,
    getTHArticles,
    getTOIArticles,
    getNDTVArticles,
    getSavedArticles,
    saveArticle,
    deleteSavedArticle
} = require('../controllers/articles')

router.route('/home').get(getAllArticles)
router.route('/timesofindia').get(getTOIArticles)
router.route('/thehindu').get(getTHArticles)
router.route('/ndtv').get(getNDTVArticles)
router.route('/saved').get(getSavedArticles).post(saveArticle)
router.route('/saved/:id').delete(deleteSavedArticle)

module.exports = router
