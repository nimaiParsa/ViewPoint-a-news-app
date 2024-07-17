import axios from 'axios'
import { enqueueSnackbar } from 'notistack'

export default function fetchData(setLoading, setArticles, url, navigate) {
    setLoading(true)
    const token = localStorage.getItem('token')
    axios.get(url, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then(response => {
        setArticles(response.data.articles)
        setLoading(false)
    }).catch(err => {
        if (err.name == "AxiosError") {
            enqueueSnackbar(err.response?.data?.msg || "something went wrong", { variant: "error" })
            if (err.response?.data?.msg === 'Authentication invalid') {
                navigate('/login');
            }
        } else {
            enqueueSnackbar(err.message, { variant: "error" })
        }
        setLoading(false)
        console.log(err)
    })
}