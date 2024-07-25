import '@styles/Footer.scss';

function option({ href, icon, text, active }) {
    return (
        <li className="footer__nav-element">
            <a href={href} className={`footer__link f-column ${active && "footer__link_active"}`}>
                {icon}
                <span className="footer__link-text text-menu">{text}</span>
            </a>
        </li>
    )
}
export default option