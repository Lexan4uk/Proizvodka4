
import '@styles/pages/Main.scss';
import { useState, useEffect } from 'react';
import ProductCard from '@components/goods_cards/ProductCard';

function MainCard({ data }) {
    return (
        <section className="f-column" id={data.name}>
            <h1>{data.name}</h1>
            {data.items.map((item) => (
                <ProductCard data={item} key={item.id} />
            ))}
        </section>
    );
}

export default MainCard;