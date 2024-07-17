import theHinduLogo from "../assets/the-hindu.svg"
import ndtvLogo from "../assets/ndtv.svg"
import toiLogo from "../assets/times-of-india.svg"
import bookmark from "../assets/bookmark.svg"
import bookmarkFill from "../assets/bookmark-fill.svg"

export default function Article(props) {
    let logo, bottom;
    if (props.source === "The Hindu") {
        logo = theHinduLogo
    } else if (props.source === "NDTV") {
        logo = ndtvLogo
    } else {
        logo = toiLogo
    }

    bottom = props.isLast ? "" : "bottom-line"

    return (
        <div className={`article ${bottom}`} >
            <a></a> <h2 className="bold article-title"><a href={props.link} className="article-link">{props.title}</a></h2>
            <p className="article-para"><a style={{ textDecoration: "none" }} href={props.link} className="article-link grey">{props.body}</a></p>
            <div className="article-source">
                <img src={logo} alt="the-hindu-logo" className='article-source-logo' />
                <span className="article-source-title"><a href={props.link} className="article-link">{props.source}</a></span>
                <img onClick={props.saveFunction} src={props.isSaved ? bookmarkFill : bookmark} alt="save" className='read-later-logo' />
            </div>
        </div>
    )
}