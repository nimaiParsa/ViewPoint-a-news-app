import { Link, useNavigate } from "react-router-dom"
import "../App.css"

export default function SideNavbar({ activePage }) {
    const navigate = useNavigate()

    function logout() {
        localStorage.removeItem('token')
        navigate('/login')
    }

    return (
        <div className="main--col1">
            <Link to='/'>
                <label className={`side-nav-title imbue ${activePage != 'Home' ? "grey" : "underline"}`}>Home</label>
            </Link>
            <Link to='/thehindu'>
                <label className={`side-nav-title imbue ${activePage != 'The Hindu' ? "grey" : "underline"}`}>The Hindu</label>
            </Link>
            <Link to='/timesofindia'>
                <label className={`side-nav-title imbue ${activePage != 'Times of India' ? "grey" : "underline"}`}>Times of India</label>
            </Link>
            <Link to='/ndtv'>
                <label className={`side-nav-title imbue ${activePage != 'NDTV' ? "grey" : "underline"}`}>NDTV</label>
            </Link>
            <Link to='/readlater'>
                <label className={`side-nav-title imbue ${activePage != 'Read Later' ? "grey" : "underline"} top70`}>Read Later</label>
            </Link>
            <label onClick={logout} className={`side-nav-title imbue ${activePage != 'Logout' ? "grey" : "underline"}`}>Logout</label>
        </div>
    )
}