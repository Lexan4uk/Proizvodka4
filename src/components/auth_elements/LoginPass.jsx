import '@styles/pages/Auth.scss';
import { useState, useEffect } from 'react';
import { InputMask } from '@react-input/mask';
import { simplePost, apiTags } from "@api/simplePost"
import getSvg from '@images/svg';


const LoginPass = ({ setLabel, setAuthData, authData }) => {
    const [password, setPassword] = useState("")
    const [showPass, setShowPass] = useState(false)
    const {
        eye
    } = getSvg()

    const handleStep = async () => {
        
        setAuthData(prevData => ({
            ...prevData,
            //"phoneNumber": "+79999999999",
            "password": `${password}`
        }))
        const response = await simplePost(apiTags.get_token, authData);
        console.log(response)

    };
    useEffect(() => {
        console.log(authData);
    }, [authData]);
    return (
        <>
            <main className="auth">
                <div className="auth__content-holder block-normalizer">
                    <div className="auth__content f-column">
                        <h1 className="auth__article title-m">Введите пароль</h1>
                        <div className="auth__input-holder f-row">
                            <input className="auth__input" placeholder="Введите пароль" type={`${showPass ? "number" : "password"}`} onChange={(e) => {setPassword(e.target.value)}}/>
                            <button className={`auth__password-switcher simple-button ${showPass && "auth__password-switcher_active"}`} onClick={() => {setShowPass(!showPass)}}>{eye()}</button>
                        </div>
                    </div>
                </div>
            </main>
            <footer className="auth footer footer_props">
                <nav className="footer__nav">
                    <button className={`button-l footer__auth-btn ${password === "" && "footer__auth-btn_inactive"}`} onClick={handleStep}>Продолжить</button>
                </nav>
            </footer>
        </>

    );
};
export default LoginPass;