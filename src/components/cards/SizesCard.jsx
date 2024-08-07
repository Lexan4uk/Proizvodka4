import '@styles/pages/Product.scss';
import { useEffect, useMemo } from 'react';

const SizesCard = ({ data, selectedThickness, setSelectedIdBySize, selectedIdBySize, setCurrentPrice }) => {
    const options = useMemo(() => data.reduce((acc, sortItem) => {
        const { thickness, size, id, min_price } = sortItem;

        if (!acc[thickness]) {
            acc[thickness] = [];
        }

        if (!acc[thickness].some(item => item.size === size)) {
            acc[thickness].push({ size, id, min_price });
        }

        return acc;
    }, {}), []);

    const availableSizes = options[selectedThickness] || [];
    useEffect(() => {
        setSelectedIdBySize(availableSizes[0].id);
        setCurrentPrice(availableSizes[0].min_price)
        console.log(selectedIdBySize)
    }, [availableSizes]);
    


    return (
        <div className="product__options-block f-column">
            <h2 className="product__option-article text-yellow text-m">Размер пиццы</h2>
            <div className="product__options-holder f-row">
                {availableSizes.map(({ size, id, min_price }) => (
                    <button key={id} className={`product__option button-text ${selectedIdBySize === id ? 'product__option_active' : ''}`} onClick={() => { setSelectedIdBySize(id); setCurrentPrice(min_price) }}>{size} см </button>
                ))}
            </div>
        </div>
    );
};
export default SizesCard
