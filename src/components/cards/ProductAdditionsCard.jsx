import '@styles/pages/Product.scss';
import getSvg from '@images/svg';

const ProductAdditionsCard = ({ addition, addAddition, selectedAdditions }) => {
    const normalizedAddition = addition.product;
    const {
        mini_plus,
        mini_minus,
    } = getSvg();

    // Проверка, добавлено ли это дополнение
    const isAdded = selectedAdditions[normalizedAddition.id];

    const handleAdd = () => {
        addAddition(prev => ({
            ...prev,
            [normalizedAddition.id]: normalizedAddition,
        }));
    };

    const handleRemove = () => {
        addAddition(prev => {
            const updatedAdditions = { ...prev };
            delete updatedAdditions[normalizedAddition.id];
            return updatedAdditions;
        });
    };

    return (
        <div className="product__addition f-column">
            <div className="product__addition-img-holder">
                <img className="product__addition-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOwRConBYl2t6L8QMOAQqa5FDmPB_bg7EnGA&s" alt="Addition img" />
            </div>
            <h3 className="product__addition-article text-s">{normalizedAddition.name}</h3>
            <div className="product__addition-interaction-holder f-row">
                <button
                    className="product__addition-interaction button"
                    onClick={handleRemove}
                    disabled={!isAdded} // Деактивация кнопки, если дополнение не добавлено
                >
                    {mini_minus(undefined, 16, 16)}
                </button>
                <span className="product__addition-price text-l">{normalizedAddition.min_price}Р</span>
                <button
                    className="product__addition-interaction button"
                    onClick={handleAdd}
                    disabled={isAdded} // Деактивация кнопки, если дополнение уже добавлено
                >
                    {mini_plus(undefined, 16, 16)}
                </button>
            </div>
        </div>
    );
};
export default ProductAdditionsCard;