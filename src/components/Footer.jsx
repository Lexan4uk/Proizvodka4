import '@styles/Footer.scss';
import getSvg from '@images/svg'
import PropTypes from 'prop-types';

function option({ href, icon, text, active }) {
    return (
        <a href={href} className={`footer__link f-column ${active && "footer__link_active"}`}>
            {icon}
            <span className="footer__link-text text-menu">{text}</span>
        </a>
    )
}

function Footer({ active }) {
    const {
        pizza,
        person,
        ticket,
        pin,
        cart
    } = getSvg()
    return (
        <footer className="footer footer_props">
            <div className="footer__holder f-row">
                {option({ href: "/", icon: pizza(), text: "Меню", active: active === 1 })}
                {option({ href: "/", icon: person(), text: "Профиль", active: active === 2 })}
                {option({ href: "/", icon: ticket(), text: "Акции", active: active === 3 })}
                {option({ href: "/", icon: pin(), text: "Контакты", active: active === 4 })}
                {option({ href: "/", icon: cart(), text: "Корзина", active: active === 5 })}
            </div>

        </footer>
    );
}
Footer.propTypes = {
    active: PropTypes.number.isRequired,
};
export default Footer;
