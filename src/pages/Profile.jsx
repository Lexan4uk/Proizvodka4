import '@styles/pages/Profile.scss';
import Footer from '@components/Footer';

import { simpleGet, apiTags } from "@api/simpleGet"
import getSvg from '@images/svg'
import useAuth from '@scripts/custom_hooks/useAuth';
import { useNavigate } from 'react-router-dom';



function Profile() {
    const {
        door,
        pen,
        arrow_right
    } = getSvg()

    const navigate = useNavigate()

    const {
        initUser,
        accData,
        isAuthorised
    } = useAuth()

    const exitClick = () => {
        localStorage.removeItem('token');
        initUser()
        navigate("/")
    }
    console.log(accData)

    return (
        <>
            <div className="profile">
                <div className="profile__content block-normalizer f-column">
                    <header className="profile__header f-row">
                        <h1 className="profile__title title-l">Профиль</h1>
                        <button className="profile__exit-btn simple-button" onClick={exitClick}>{door()}</button>
                    </header>
                    <main className="profile__main f-column">
                        <div className="profile__user-block f-column">
                            <div className="profile__user-block-top bg-yellow f-row">
                                <div className="profile__user-info-holder f-column gap-4">
                                    <span className="profile__user-name title-s text-black">{accData?.first_name}</span>
                                    <span className="profile__user-phone text-m text-black">{accData.phone_number && accData.phone_number.replace(/^(\+7)(\d{3})(\d{3})(\d{2})(\d{2})$/, '$1 $2 $3 $4 $5')}</span>
                                </div>
                                <a className="profile__edit" href="/profile/edit">{pen()}</a>
                                <span className="profile__top-triangle"></span>
                            </div>
                            <div className="profile__user-block-bottom bg-yellow">
                                <div className="profile__bonuses-holder f-column gap-4">
                                    <div className="profile__bonuses f-row gap-4">
                                        <span className="profile__bonuses-count title-l text-black">{accData.wallets && accData.wallets[0].balance}</span>
                                        <span className="profile__bonuses-text title-s text-black">NINJA-БОНУСОВ</span>
                                    </div>
                                    <a href="/" className="profile__bonuses-link link-s text-black">что такое ninja-бонусы</a>
                                </div>
                                <span className="profile__bottom-triangle"></span>
                                <span className="profile__bottom-square"></span>
                            </div>
                        </div>
                        <div className="profile__user-delivery-block f-row gap-16">
                            <a className="profile__user-delivery-link" href="/"><span className="profile__user-delivery-link_text text-yellow text-l">Мои заказы</span></a>
                            <a className="profile__user-delivery-link" href="/"><span className="profile__user-delivery-link_text text-yellow text-l">Адреса доставки</span></a>
                        </div>
                        <div className="profile__user-links-block">
                            <a href="/" className="profile__user-link f-row">
                                <span className="profile__user-link-text text-l">Сменить пароль</span>
                                {arrow_right()}
                            </a>
                            <a href="/" className="profile__user-link f-row">
                                <span className="profile__user-link-text text-l">Оставить отзыв</span>
                                {arrow_right()}
                            </a>
                            <a href="/" className="profile__user-link f-row">
                                <span className="profile__user-link-text text-l">Стать тайным покупателем</span>
                                {arrow_right()}
                            </a>
                        </div>
                    </main>
                </div>
            </div>
            <Footer active={2} />
        </>
    )
}
export default Profile;