import '@styles/cards/InputCard.scss';
import { InputMask } from '@react-input/mask';
import { useFormContext } from "react-hook-form";





function InputCard({ type = "Input",
    dataName = "",
    mask = '',
    replacement = null,
    isShowMask = false,
    inputType = "text",
    setPlaceholder = "",
    validationRules = {},
    setValue = "",
    setOnChange = "",
    setIcon = undefined,
    additionClass = ""}) {
    const { register, formState: { errors } } = useFormContext();

    let inputElement;

    switch (type) {
        case "Input":
            inputElement = (
                <div className="inputcard__main-box f-column gap-4">
                    <div className={`inputcard__input-border ${errors[dataName] && "inputcard__input-border_error"}`}>
                        <input
                            {...register(dataName, validationRules)}
                            className="inputcard__input"
                            type={inputType}
                            placeholder={setPlaceholder}
                        />
                    </div>
                    {errors[dataName] && <span className="inputcard__error text-m text-red">{errors[dataName].message}</span>}
                </div>
            );
            break;
        case "InputMask":
            inputElement = (
                <div className="inputcard__main-box f-column gap-4">
                    <div className={`inputcard__input-border ${errors[dataName] && "inputcard__input-border_error"}`}>
                        <InputMask
                            {...register(dataName, validationRules)}
                            className="inputcard__input"
                            mask={mask}
                            replacement={replacement}
                            showMask={isShowMask}
                            type={inputType}
                            placeholder={setPlaceholder}
                        />
                    </div>
                    {errors[dataName] && <span className="inputcard__error text-m text-red">{errors[dataName].message}</span>}
                </div>
            );
            break;
        case "SimpleInput":
            inputElement = (
                <div className="inputcard__main-box f-column gap-4">
                    <div className={`inputcard__input-border`}>
                        <input type={inputType} className="inputcard__input" placeholder={setPlaceholder} value={setValue} onChange={setOnChange} />
                        {setIcon && setIcon}
                    </div>
                </div>
            );
            break;
        case "AddAddressInput":
            inputElement = (
                <div className={`inputcard__main-box f-column gap-4 ${additionClass}`}>
                    <div className={`inputcard__input-border`}>
                        <input {...register(dataName, validationRules)} type={inputType} className="inputcard__input" placeholder={setPlaceholder} defaultValue={setValue} />
                    </div>
                </div>
            );
            break;
        default:
            inputElement = null;
            break;
    }

    return inputElement;
}

export default InputCard;