import '@styles/pages/Auth.scss';
import { useState, useEffect } from 'react';
import LoginPass from '@components/auth_elements/LoginPass'
import PhoneEnter from '@components/auth_elements/PhoneEnter'



const Auth = () => {

    const [label, setLabel] = useState(1);
    const [authData, setAuthData] = useState({})
    let content;
    switch (label) {
        case 1:
            content = <PhoneEnter setLabel={setLabel} setAuthData={setAuthData}/>;
            break;
        case 2:
            content = <LoginPass setLabel={setLabel} setAuthData={setAuthData} authData={authData}/>;
            break;
        case 'email':
            content = <h1>Введите ваш email</h1>;
            break;
        default:
            content = <h1>Неизвестный тип</h1>;
            break;
    }
    const handleStep = () => {

    }

    return (
        <>
            {content}
        </>

    );
};
export default Auth;