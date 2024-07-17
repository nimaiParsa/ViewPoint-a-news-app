import axios from 'axios'
import { enqueueSnackbar } from 'notistack'

export default function saveArticle(link, title, source, body, isSaved, id, setLoading, setArticles) {
    const token = localStorage.getItem('token')
    console.log('trying to save')

    if (isSaved) {
        console.log('trying to delete')
        axios.delete(`http://localhost:3000/api/v1/saved/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            },
        }).then(response => {
            setLoading(false)
            setArticles(prev => {
                return prev.map((article) => {
                    if (article.link != link) {
                        return article
                    } else {
                        return {
                            ...article,
                            isSaved: false
                        }
                    }
                })
            })
        }).catch(err => {
            setLoading(false)
            if (err.name == "AxiosError") {
                enqueueSnackbar(err.response?.data?.msg || "something went wrong", { variant: "error" })
            } else {
                enqueueSnackbar(err.message, { variant: "error" })
            }
            console.log(err)
        })
    } else {
        axios.post('http://localhost:3000/api/v1/saved', {
            link: link,
            head: title,
            source: source,
            para: body,
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            },
        }).then(response => {
            setLoading(false)
            setArticles(prev => {
                return prev.map((article) => {
                    if (article.link != link) {
                        return article
                    } else {
                        return {
                            ...article,
                            isSaved: true
                        }
                    }
                })
            })
        }).catch(err => {
            setLoading(false)
            if (err.name == "AxiosError") {
                enqueueSnackbar(err.response?.data?.msg || "something went wrong", { variant: "error" })
            } else {
                enqueueSnackbar(err.message, { variant: "error" })
            }
            console.log(err)
        })
    }
    window.location.reload()
}
