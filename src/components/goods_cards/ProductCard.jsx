import '@styles/cards/MenuCard.scss';
import getSvg from '@images/svg'


function ProductCard({ data }) {
    const {
        productcard_border,
        productcard_border_circle,
        cart,
        premium,
        baked,
        fried
    } = getSvg()
    const tagProcessing = (tag) => {
        switch (tag) {
            case "Premium":
                return premium(undefined, undefined, "menu-card__tag")
            case "Жареный":
                return fried(undefined, undefined, "menu-card__tag")
            case "Запеченный":
                return baked(undefined, undefined, "menu-card__tag")
            default:
                break
        }
    }
    return (
        <a href={`http://localhost:3000/product/${data.id}`} className="menu-card menu-card_props f-column">
            {productcard_border(undefined, undefined, undefined, "menu-card__border")}
            {productcard_border_circle(undefined, undefined, undefined, "menu-card__border-circle")}
            <div className="menu-card__content-holder">
                <div className="menu-card__img-holder">
                    <img className="menu-card__img" src={data.image_links[0]} alt="Product image" />
                    {data.tags.length !== 0 && (
                        data?.tags?.map((tag) => {
                            return tagProcessing(tag)
                        })
                    )
                    }
                </div>
                <div className="menu-card__content gap-4">
                    <h3 className="menu-card__content-article title-xs">{data.name}</h3>
                    <p className="menu-card__content-text text-s">{data.description}</p>
                </div>
            </div>
            <div className="menu-card__buttons-holder f-row">
                <a href="/" className="menu-card__button-choose menu-card__button-choose_left f-row gap-4 button-s button-s_slice-left">{cart("var(--white)")}Выбрать <span className="menu-card__button-choose_text-right">От {data.min_price} ₽</span></a>
            </div>

        </a>
    )
}
export default ProductCard