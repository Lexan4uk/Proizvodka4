import '@styles/Footer.scss';
import getSvg from '@images/svg'
import PropTypes from 'prop-types';
import option from '@components/menu_elements/Footer_option'
import useAuth from '@scripts/custom_hooks/useAuth';


function Footer({ active }) {
    const {
        pizza,
        person,
        ticket,
        pin,
        cart
    } = getSvg()
    const {
        isAuthorised,
    } = useAuth();
    return (
        <footer className="footer footer_props">
            <nav className="footer__nav">
                {!isAuthorised ? (
                    <a href="/auth" className="button-l footer__auth-btn">Авторизоваться</a>)
                    : (<ul className="footer__holder f-row">
                        {option({ href: "/", icon: pizza(), text: "Меню", active: active === 1 })}
                        {option({ href: "/", icon: person(), text: "Профиль", active: active === 2 })}
                        {option({ href: "/actions", icon: ticket(), text: "Акции", active: active === 3 })}
                        {option({ href: "/", icon: pin(), text: "Контакты", active: active === 4 })}
                        {option({ href: "/", icon: cart(), text: "Корзина", active: active === 5 })}
                    </ul>)}

            </nav>
        </footer>
    );
}
Footer.propTypes = {
    active: PropTypes.number.isRequired,
};
export default Footer;
