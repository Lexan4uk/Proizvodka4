import '@styles/pages/SearchPage.scss';
import { kladrGet } from "@api/kladrGet"
import { useParams, useNavigate } from 'react-router-dom';
import useSWR from 'swr';
import getSvg from '@images/svg'
import { useState, useEffect } from 'react';
import InputCard from '@components/cards/InputCard'
import useCity from '@scripts/custom_hooks/useCity';


function SearchPage() {
    const { type } = useParams();
    let page_data = {}
    switch (type) {
        case "street":
            page_data = {
                placeholder: "Улица"
            }
    }
    const { cityData } = useCity()
    const [searchItem, setSearchItem] = useState('')
    const navigate = useNavigate();

    const { arrow, search } = getSvg()
    
    const { data: querryData, error: qError } = useSWR(
        searchItem && cityData.classifier_id ? `query=${searchItem}&contentType=street&cityId=${cityData.classifier_id}` : null,
        kladrGet
    );



    const handleChange = (event) => {
        setSearchItem(event.target.value);
    };

    return (
        <>
            <main className="search-page search-page_props">
                <section className="search-page__content block-normalizer f-column">
                    <form className="search-page__form f-row gap-16">
                        <button className="search-page__header-button simple-button" onClick={() => navigate("/profile/addresses/add")}>{arrow("var(--white)")}</button>
                        <InputCard
                            type="SimpleInput"
                            inputType="text"
                            setPlaceholder={page_data.placeholder}
                            setValue={searchItem}
                            setOnChange={handleChange}
                            setIcon={search(undefined, undefined, undefined, "search-page__search-icon")}
                        />
                    </form>
                    <div className="search-page__options-holder f-column">
                        {querryData?.result?.slice(1).map((element) => (
                            <button key={element.id} className={`search-page__option simple-button`} onClick={() => {navigate("/profile/addresses/add", {state: {
                                selectedStreetName: `${element.typeShort}. ${element.name}`,
                                selectedStreetId: element.id
                            }})}}>
                                {`${element.typeShort}. ${element.name}`}
                            </button>
                        ))}
                    </div>
                </section>
            </main>
        </>
    )
}

export default SearchPage;
