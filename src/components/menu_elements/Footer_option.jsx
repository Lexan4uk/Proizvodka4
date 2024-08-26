import '@styles/Footer.scss';
import { Link } from "react-router-dom";

function option({ href, icon, text, active }) {
    return (
        <li className="footer__nav-element">
            <Link to={href} className={`footer__link f-column ${active && "footer__link_active"}`}>
                {icon}
                <span className="footer__link-text text-menu">{text}</span>
            </Link>
        </li>
    )
}
export default option