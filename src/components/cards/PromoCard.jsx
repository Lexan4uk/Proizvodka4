import '@styles/cards/PromoCard.scss';
import getSvg from '@images/svg'


function PromoCard({ data }) {
    const {
        promocard_border,
        circle
    } = getSvg()
    
    return (

        <a className="promo-card promo-card_props f-column" href={data.href}>
            {promocard_border(undefined, undefined, undefined, "promo-card__border")}
            {circle(undefined, undefined, undefined, "promo-card__border-circle")}
            <div className="promo-card__image-holder f-row">
                <img src={`https://nf.kvokka.net${data.cover}`} alt="Promo img" />
            </div>
            <div className="promo-card__content">
                <h2 className="promo-card__text title-xs">{data.title}</h2> 
            </div>
        </a>
    )
}
export default PromoCard
