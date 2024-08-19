import '@styles/pages/Search.scss';
import { simpleGet, apiTags } from "@api/simpleGet"
import { useParams, useNavigate } from 'react-router-dom';
import useSWR from 'swr';
import getSvg from '@images/svg'
import { useState, useEffect } from 'react';
import useAdress from '@scripts/custom_hooks/useAdress';



function Actions() {
    const { type } = useParams();
    const apiTag = type === "city" ? apiTags.city : null;
    const { data: rawCities, error: cError, isLoading: cIsLoading } = useSWR(apiTag, simpleGet);

    const [searchItem, setSearchItem] = useState('')
    const [cities, setCities] = useState([])
    const [filteredCities, setFilteredCities] = useState()

    const [selectedCity, setSelectedCity] = useState()

    const {
        selectCity,
    } = useAdress()

    useEffect(() => {
        if (rawCities && rawCities.items) {
            const cityNames = rawCities.items.map(city => city.name);
            setCities(cityNames);
        }
    }, [rawCities]);

    useEffect(() => {
        const results = cities.filter(city =>
            city.toLowerCase().includes(searchItem.toLowerCase())
        );
        if (results.length === 0)
            setFilteredCities(cities);
        else
            setFilteredCities(results);
    }, [searchItem, cities]);



    const {
        cross,
        search
    } = getSvg()

    const navigate = useNavigate();

    const handleChange = (event) => {
        setSearchItem(event.target.value);
    };
    const handleSave = () => {
        selectCity(selectedCity)
        navigate("/")
    }

    return (
        <>
            <main className="search search_props">
                <header className="search__header block-normalizer f-row">
                    <button className="search__header-button simple-button" onClick={() => navigate("/")}>{cross()}</button>
                </header>
                <section className="search__content block-normalizer f-column">
                    <h1 className="search__article title-m">{type === "city" ? "Выберите город" : ""}</h1>
                    <div className="search__search-field f-row">
                        <input type="text" className="search__search" placeholder="Введите город" value={searchItem} onChange={handleChange} />
                        {search(undefined, undefined, undefined, "search__search-icon")}
                    </div>
                    <div className="search__options-holder f-column">
                        {filteredCities?.map((city, index) => (
                            <button id={index} className={`search__option simple-button ${selectedCity === city && "search__option_selected"}`} onClick={() => setSelectedCity(city)}>{city}</button>
                        ))}
                    </div>
                </section>
                <footer className="footer footer_props search__footer">
                    <nav className="footer__nav">
                        <button className={`footer__auth-btn button-l ${!selectedCity && "footer__auth-btn_inactive"}`} onClick={handleSave}>Сохранить</button>
                    </nav>
                </footer>
            </main>

        </>
    )
}
export default Actions;