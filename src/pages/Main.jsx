import '@styles/pages/Main.scss';
import Header from '@components/Header';
import Footer from '@components/Footer';
import MainCard from '@components/goods_cards/MainCard'
import useSWR from 'swr';
import { simpleGet, apiTags } from "@api/simpleGet"
import { useState, useEffect } from 'react';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination'


function Main() {
  const { data: options, error: opError, isLoading: opIsLoading } = useSWR(apiTags.menu_categories, simpleGet);
  const { data: goods, error: gError, isLoading: gIsLoading } = useSWR(apiTags.menu, simpleGet);
  const sortedGoods = goods?.items?.reduce((acc, item) => {
    const groupName = item.parent_group.name;
    const groupColor = item.parent_group.color || 'defaultColor';

    let group = acc.find(group => group.name === groupName);

    if (!group) {
      group = {
        name: groupName,
        color: groupColor,
        items: []
      };
      acc.push(group);
    }

    group.items.push(item);

    return acc;
  }, []);


  console.log(sortedGoods);

  const [activeDelivery, setActiveDelivery] = useState('Самовывоз');

  const handleDeliveryClick = (buttonName) => {
    setActiveDelivery(buttonName);
  };
  useEffect(() => {
    new Swiper('.nav-swiper', {
      spaceBetween: 14,
      slidesPerView: 'auto'
    });
  }, [options]);
  return (
    <>
      <Header />
      <main className="main-catalog main-catalog_props">
        <div className="main-catalog__delivery-holder f-column block-normalizer">
          <div className="main-catalog__delivery-options f-row">
            <button className={`main-catalog__delivery-option button-text ${activeDelivery === 'Самовывоз' ? 'main-catalog__delivery-option_active' : ''}`} onClick={() => handleDeliveryClick('Самовывоз')}>
              Самовывоз
            </button>
            <button className={`main-catalog__delivery-option button-text ${activeDelivery === 'Доставка' ? 'main-catalog__delivery-option_active' : ''}`} onClick={() => handleDeliveryClick('Доставка')} >
              Доставка
            </button>
          </div>
          <a className="main-catalog__add-adress hlink-l text-yellow" href="/">Добавить адрес</a>
        </div>
        {/*------------------сюда промо-----------------------------*/}
        <nav className="main-catalog__goods-nav-holder nav-swiper">
          <ul className="main-catalog__goods-nav swiper-wrapper">
            {
              options?.items?.map((option) => (
                <li key={option.id} className='main-catalog__goods-nav-el swiper-slide'><a href={`#${option.name}`} className='main-catalog__goods-nav-link'>{option.name}</a></li>
              ))
            }
          </ul>
        </nav>
        {sortedGoods?.map((item) => (
          <MainCard data={item} />
        ))}

      </main>
      <Footer active={1} />
    </>
  );
}

export default Main;
