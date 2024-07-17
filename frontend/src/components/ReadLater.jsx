import Article from './Article'
import { useEffect, useState } from 'react'
import fetchData from '../utils/fetchData'
import saveArticle from '../utils/saveArticle'
import { useNavigate } from 'react-router-dom'

export default function ReadLater() {
    const [loading, setLoading] = useState(false)
    const [articles, setArticles] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        const url = 'http://localhost:3000/api/v1/saved'
        fetchData(setLoading, setArticles, url, navigate)
    }, [])

    return (
        <>
            <h2 className="bold imbue">Read Later</h2>
            {
                loading ? <p style={{ paddingTop: "2em" }} className='grey'>
                    No articles in Read Later. Save articles to read them at your convenient time.
                </p> :
                    articles.length ?
                        articles.map((item, index) => {
                            return (
                                <Article
                                    key={item.id}
                                    title={item.head}
                                    body={item.para}
                                    source={item.source}
                                    isLast={false}
                                    isSaved={item.isSaved}
                                    saveFunction={() => saveArticle(item.link, item.head, item.source, item.para, item.isSaved, item.id, setLoading, setArticles)}
                                    link={item.link}
                                />
                            )
                        }) : (
                            <p style={{ paddingTop: "2em" }} className='grey'>
                                No articles in Read Later. Save articles to read them at your convenient time.
                            </p>
                        )
            }
        </>
    )
}