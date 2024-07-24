import '@styles/pages/Main.scss';
import Header from '@components/Header';
import Footer from '@components/Footer';
import useSWR from 'swr';
import {simpleGet, apiTags} from "@api/simpleGet"


function Main() {
  const { data: options, error: opError, isLoading: opIsLoading } = useSWR(apiTags.menu_categories, simpleGet);
  const { data: goods, error: gError, isLoading: gIsLoading } = useSWR(apiTags.menu, simpleGet);
  console.log(options)
  console.log(goods)
  return (
    <>
      <Header />
      <main className="main-catalog block-normalizer">
      </main>
      <Footer active={1}/>
    </>
  );
}

export default Main;
