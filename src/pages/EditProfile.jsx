import '@styles/pages/EditProfile.scss';

import { simplePost, apiTags } from "@api/simplePost"
import getSvg from '@images/svg'
import useAuth from '@scripts/custom_hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import { InputMask } from '@react-input/mask';



function EditProfile() {
    const {
        arrow
    } = getSvg()

    const methods = useForm();
    const { handleSubmit, register, watch, formState: { errors } } = methods

    const onSubmit = async (data) => {
        const [day, month, year] = data.birthday.split('-');
        const normalizedData = {
            //имя поменять нельзя :(
            "phone": data.phone.replace(/[+]/g, '').replace(/[^0-9]/g, ''),
            "email": data.email,
            "birthday": {
                "year": parseInt(year, 10),
                "month": parseInt(month, 10),
                "day": parseInt(day, 10)
            }
        }
        
        console.log(normalizedData)
        const responce = await simplePost(apiTags.edit_user, normalizedData)
        console.log(responce)
    }

    return (
        <>
            <header className="editprofile header">
                <div className="header__holder block-normalizer f-row">
                    <button className="editprofile__header-arrow simple-button" onClick={() => window.history.back()}>{arrow()}</button>
                    <h1 className="editprofile__header-title title-xs">Личные данные</h1>
                </div>
            </header>
            <main className="editprofile">
                <div className="editprofile__content-holder block-normalizer">
                    <FormProvider {...methods} >
                        <form className="editprofile__form f-column gap-16" onSubmit={handleSubmit(onSubmit)}>
                            <div className="editprofile__form-element f-column gap-4">
                                <h2 className="editprofile__form-element-title text-m">Как к вам обращаться?</h2>
                                <div className="editprofile__input-border">
                                    <input {...register("first_name")} className="editprofile__input" placeholder="Введите ваше имя" type="text" />
                                </div>
                            </div>
                            <div className="editprofile__form-element f-column gap-4">
                                <h2 className="editprofile__form-element-title text-m">Ваш номер телефона</h2>
                                <div className="editprofile__input-border">
                                    <InputMask {...register("phone")} className="editprofile__input" mask='+7 (___) ___-__-__' replacement={{ _: /\d/ }} showMask type='tel' />
                                </div>
                            </div>
                            <div className="editprofile__form-element f-column gap-4">
                                <h2 className="editprofile__form-element-title text-m">Ваш email</h2>
                                <div className="editprofile__input-border">
                                    <input {...register("email")} className="editprofile__input" placeholder="Введите ваш email" type="email" />
                                </div>
                            </div>
                            <div className="editprofile__form-element f-column gap-4">
                                <h2 className="editprofile__form-element-title text-m">Дата рождения</h2>
                                <div className="editprofile__input-border">
                                    <InputMask {...register("birthday")} className="editprofile__input" mask="ДД-ММ-ГГГГ" replacement={{ Д: /\d/, М: /\d/, Г: /\d/ }} showMask />
                                </div>
                            </div>
                        </form>
                    </FormProvider>
                </div>
            </main>
            <footer className="editprofile footer footer_props">
                <nav className="footer__nav">
                    <button className={`button-l footer__auth-btn ${false && "footer__auth-btn_inactive"}`} onClick={handleSubmit(onSubmit)}>Сохранить</button>
                </nav>
            </footer>
        </>
    )
}
export default EditProfile;
