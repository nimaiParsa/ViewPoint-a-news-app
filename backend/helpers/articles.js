const axios = require('axios')
const jsdom = require('jsdom')

const getFromTH = async (start, end) => {
    const url = 'https://www.thehindu.com/showcase/'
    const response = await axios.get(url)
    const dom = new jsdom.JSDOM(response.data)
    const articles = Array.from(dom.window.document.querySelectorAll(".row-element"))
        .map(article => {
            const content = article.querySelector('.content')
            const link = article.querySelector('a')?.href
            const head = content.querySelector('h3')?.querySelector('a').textContent
            const para = content.querySelector('.sub-text')?.querySelector('a').textContent

            return { link, head, para, source:"The Hindu" }
        })
        .filter(item => item.link && item.head && item.para)
        .slice(start, end)

    return articles
}

const getFromNDTV = async (start, end) => {
    const url = 'https://www.ndtv.com/latest'
    const response = await axios.get(url)
    const dom = new jsdom.JSDOM(response.data)
    const articles = Array.from(dom.window.document.querySelectorAll(".news_Itm-cont"))
    .map(article => {
        const link = article.querySelector('h2')?.querySelector('a').href
        const head = article.querySelector('h2')?.querySelector('a').textContent
        const para = article.querySelector('p')?.textContent
        
        return { link, head, para, source:"NDTV" }
    })
    .filter(item => item.link && item.head && item.para)
    .slice(start, end)
    
    return articles
}

const getFromTOI = async (start, end) => {
    const url = 'https://timesofindia.indiatimes.com/briefs'
    const response = await axios.get(url)
    const dom = new jsdom.JSDOM(response.data)
    const articles = Array.from(dom.window.document.querySelectorAll(".brief_box"))
        .map(article => {
            const img = article.querySelector('a')?.querySelector('img').src
            const link = 'https://timesofindia.indiatimes.com' + article.querySelector('a')?.href
            const head = article.querySelector('h2')?.querySelector('a').textContent
            const para = article.querySelector('p')?.querySelector('a').textContent

            return { link, head, para, source:"Times of India" }
        })
        .filter(item => item.link && item.head && item.para)
        .slice(start, end)

    return articles
}

module.exports = {
    getFromNDTV,
    getFromTOI,
    getFromTH,
}