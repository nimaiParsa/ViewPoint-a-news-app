import React from 'react'
import Navbar from '../components/Navbar'
import SideNavbar from '../components/SideNavbar'
import ReadLater from '../components/ReadLater'
import Article from '../components/Article'
import { useEffect, useState } from 'react'
import fetchData from '../utils/fetchData'
import saveArticle from '../utils/saveArticle'
import { useNavigate } from 'react-router-dom'

export default function TOI() {
    const [loading, setLoading] = useState(false)
    const [articles, setArticles] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        const url = 'http://localhost:3000/api/v1/timesofindia'
        fetchData(setLoading, setArticles, url, navigate)
    }, [])

    return (
        <>
            <Navbar />
            <main className="main">
                <SideNavbar
                    activePage="Times of India"
                />
                <div className="main--col2">
                    <h2 className="bold imbue">Times of India</h2>
                    {
                        loading ? (<p style={{ paddingTop: "2em" }} className='grey'>
                            Loading...
                        </p>) :
                            articles.map((item, index) => {
                                return (
                                    <Article
                                        key={index}
                                        title={item.head}
                                        body={item.para}
                                        source={item.source}
                                        isLast={false}
                                        isSaved={item.isSaved}
                                        saveFunction={() => saveArticle(item.link, item.head, item.source, item.para, item.isSaved, item.id, setLoading, setArticles)}
                                        link={item.link}
                                    />
                                )
                            })
                    }
                </div>
                <div className="main--col3">
                    <div className="read-later-articles">
                        <ReadLater />
                    </div>
                </div>
            </main>
        </>
    )
}
