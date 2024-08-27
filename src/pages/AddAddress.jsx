import '@styles/pages/AddAddress.scss';
import { Link } from "react-router-dom";
import getSvg from '@images/svg'
import { kladrGet } from "@api/kladrGet"
import useSWR from 'swr';
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import InputCard from '@components/cards/InputCard'
import useCity from '@scripts/custom_hooks/useCity';
import { useEffect, useState } from 'react';



function AddAddress() {
    const {
        arrow
    } = getSvg()

    const {
        cityData
    } = useCity()

    const [formData, setFormData] = useState({})
    const { data: streets, error: sError, isLoading: sIsLoading } = useSWR(`contentType=street&cityId=${cityData.classifier_id}`, kladrGet);
    useEffect(() => {
        console.log(streets)

    }, [streets])





    const methods = useForm();
    const { handleSubmit, trigger, formState: { errors }, register } = methods;

    return (
        <>
            <main className="add-address">
                <header className="add-address header">
                    <div className="header__holder block-normalizer f-row">
                        <button className="add-address__header-arrow simple-button" onClick={() => window.history.back()}>{arrow()}</button>
                        <h1 className="add-address__header-title title-xs">Адреса доставки</h1>
                    </div>
                </header>
                <section className="add-address__content block-normalizer">
                    <FormProvider {...methods} >
                        <form className="add-address__form f-column gap-16">
                            <div className="add-address__input-holder f-column gap-4">
                                <h2 className="add-address__input-article text-m">Населённый пункт</h2>
                                <div className={`inputcard__input-border add-address__unactive-input`}>
                                    <input className="inputcard__input" defaultValue={cityData.cityName} />
                                </div>
                            </div>
                            <div className="add-address__input-holder f-column gap-4">
                                <h2 className="add-address__input-article text-m">Улица</h2>
                                <div className={`inputcard__main-box f-column gap-4`}>
                                    <div className={`inputcard__input-border`}>
                                        <input className="inputcard__input" placeholder="Улица" />
                                    </div>
                                </div>

                            </div>
                        </form>
                    </FormProvider>
                </section>
                <footer className="add-address footer_props search__footer">
                    <nav className="footer__nav">
                        <button className={`footer__auth-btn button-l`} >Сохранить</button>
                    </nav>
                </footer>
            </main>

        </>
    )
}
export default AddAddress;