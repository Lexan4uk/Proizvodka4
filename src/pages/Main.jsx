import '@styles/pages/Main.scss';
import Header from '@components/Header';
import Footer from '@components/Footer';
import MainCard from '@components/cards/MainCard'
import useSWR from 'swr';
import objectNormalizer from '@scripts/helpers/objectNormalizer';
import { simpleGet, apiTags } from "@api/simpleGet"
import { useState, useEffect, useRef } from 'react';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import getSvg from '@images/svg'


function Main() {
  const { data: options, error: opError, isLoading: opIsLoading } = useSWR(apiTags.menu_categories, simpleGet);
  const { data: goods, error: gError, isLoading: gIsLoading } = useSWR(apiTags.menu, simpleGet);
  const { data: promotions, error: pError, isLoading: pIsLoading } = useSWR(apiTags.promotions, simpleGet);
  let normalizedPromos
  if (!pIsLoading) {
    normalizedPromos = promotions.items.map((item) => {
      return objectNormalizer(item, "actions")
    })
  }
  let sortedGoods
  if (!gIsLoading) {
    sortedGoods = goods.items.reduce((acc, item) => {
      objectNormalizer(item, "product")
      const parentGroupId = item.parent_group.id;
      const groupName = item.parent_group.name;
      const groupColor = item.parent_group.color || 'defaultColor';
      let group = acc.find(group => group.parent_group_id === parentGroupId);
      if (!group) {
        group = {
          parent_group_id: parentGroupId,
          name: groupName,
          color: groupColor,
          items: []
        };
        acc.push(group);
      }
      group.items.push(item);
      return acc;
    }, []);
  }

  const [activeDelivery, setActiveDelivery] = useState('Самовывоз');
  const [isFixed, setIsFixed] = useState(false);
  const navRef = useRef(null);
  const navWrapperRef = useRef(null);
  const [navOffsetTop, setNavOffsetTop] = useState(0);
  const {
    search
  } = getSvg()

  const handleDeliveryClick = (buttonName) => {
    setActiveDelivery(buttonName);
  };

  useEffect(() => {
    new Swiper('.nav-swiper', {
      spaceBetween: 14,
      slidesPerView: 'auto',
      modules: [Navigation, Pagination],
    });
    new Swiper('.promotion-swiper', {
      spaceBetween: 12,
      slidesPerView: 'auto',
    });

    const handleScroll = () => {
      if (window.scrollY > navOffsetTop) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    if (navRef.current) {
      setNavOffsetTop(navRef.current.offsetTop);
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navOffsetTop, options]);

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
        <aside className={`main-catalog__promotion-holder ${isFixed ? 'main-catalog__promotion-holder_margin-bottom' : ''}`}>
          <div className="main-catalog__promotion promotion-swiper">
            <div className="swiper-wrapper">
              {normalizedPromos?.map((item) => (
                <a href={item.href} key={item.id} className="main-catalog__promotion-slide swiper-slide">
                  <img className="main-catalog__promotion-slide-img" src={`https://nf.kvokka.net${item.cover}`} alt="" />
                </a>
              ))}
            </div>
          </div>
        </aside>

        <div ref={navWrapperRef} className={`main-catalog__goods-nav-wrapper f-row ${isFixed ? 'main-catalog__goods-nav-wrapper_fixed' : ''}`}>
          {isFixed && <a className="main-catalog__static-nav-search" href="/search">{search()}</a>}
          <nav className={`main-catalog__goods-nav-holder nav-swiper ${isFixed ? 'main-catalog__goods-nav-holder_fixed' : ''}`} ref={navRef}>
            <ul className="main-catalog__goods-nav swiper-wrapper">
              {
                options?.items?.map((option) => (
                  <li key={option.id} className='main-catalog__goods-nav-el swiper-slide'>
                    <a href={`#${option.name}`} className='main-catalog__goods-nav-link'>{option.name}</a>
                  </li>
                ))
              }
            </ul>
          </nav>
        </div>
        {sortedGoods?.map((item) => (
          <MainCard data={item} key={item.name} />
        ))}
      </main>
      <Footer active={1} />
    </>
  );
}

export default Main;
