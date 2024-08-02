import '@styles/pages/Product.scss';
import { simpleGet, apiTags } from "@api/simpleGet"
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import useSWR from 'swr';
import objectNormalizer from '@scripts/helpers/objectNormalizer';
import getSvg from '@images/svg'
import Footer from '@components/Footer';

function Product() {
    const { id } = useParams();
    const { data: product, error, isLoading: pIsLoading } = useSWR(apiTags.productById(id), simpleGet);
    const [productCount, setProductCount] = useState(1);
    const [selectedProduct, setSelectedProduct] = useState()
    
    const [price, setPrice] = useState()
    useEffect(() => {
        if (product && !pIsLoading) {
            product.items.map((item) => {
                objectNormalizer(item, "singleProduct")
            })
            console.log(product.items)
            setSelectedProduct(product.items[0]);
        }
    }, [pIsLoading]);

    useEffect(() => {
        setPrice(selectedProduct?.min_price * productCount)
    }, [selectedProduct, productCount]) //временно

    const {
        mini_plus,
        mini_minus,
        cross,
        info
    } = getSvg()

    return (
        <>
            <main className="product product_props block-normalizer f-column">
                <button className="product__exit-btn button-s button-s_slice-left" onClick={() => window.history.back()}>{cross("var(--black)")}</button>
                <div className="product__img-holder">
                    <img className="product__img" src={selectedProduct?.image_links[0]} alt="Product image" />
                </div>
                <section className="product__content f-column">
                    <div className="profuct__info f-column gap-16">
                        <div className="product__top-info">
                            <div className="product__header f-row">
                                <h1 className="product__title title-m">{selectedProduct?.parent_group.name}</h1>
                                {selectedProduct?.energy_full_amount !== 0 && <button className="simple-button">{info("var(--yellow")}</button>}
                            </div>
                            {selectedProduct?.weight !== 0 && <span className="product__weight text-m text-yellow">{selectedProduct?.weight * 1000} г</span>}
                        </div>
                        <span className="product__text text-l">{selectedProduct?.description}</span>
                    </div>
                </section>
            </main>
            <footer className="product footer footer_props ">
                <div className="product__footer-content block-normalizer f-row gap-16">
                    <div className="product__footer-counter-holder f-row">
                        <button className="product__footer-counter-btn button" onClick={() => productCount > 1 && setProductCount(productCount - 1)}>{mini_minus()}</button>
                        <input className="product__footer-counter text-l" readOnly value={productCount} type="number" />
                        <button className="product__footer-counter-btn button" onClick={() => productCount < 99 && setProductCount(productCount + 1)}>{mini_plus()}</button>
                    </div>
                    <button className="product__footer-cart-add button-l button">В корзину за {price}Р</button>
                </div>
            </footer>
        </>)
}
export default Product