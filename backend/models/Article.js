const mongoose = require('mongoose')

const ArticleSchema = new mongoose.Schema({
    link: {
        type: String,
        required: [true, 'Please provide link'],
    },
    head: {
        type: String,
        required: [true, 'Please provide head'],
    },
    para: {
        type: String,
        required: [true, 'Please provide para'],
    },
    source: {
        type: String,
        required: [true, 'Please provide para'],

    },
    savedBy: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: [true, 'Please provide the owner'],
    }
}, { timestamps: true })


module.exports = mongoose.model('Article', ArticleSchema)