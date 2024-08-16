import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from '@pages/Main';
import Actions from '@pages/Actions';
import Action from '@pages/Action';
import Product from '@pages/Product';
import Search from '@pages/Search';
import Auth from '@pages/Auth';




import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import reportWebVitals from './reportWebVitals';
import '@fonts/fonts.scss'
import '@globalStyles/globals.scss';
import '@globalStyles/mixins.scss';
import '@globalStyles/normalize.scss';
import '@globalStyles/variables.scss';

const App = (props) => {
  /*const [isUserFetching, setIsUserFetching] = useRecoilState(isUserFetchingState);

  const {
    initUser,
    isAuthorised
  } = useAuth();

  useEffect(() => {
    if (!isUserFetching && !isAuthorised) {
      setIsUserFetching(true)
      initUser()
      setIsUserFetching(false)
    }
  }, [isAuthorised, isUserFetching])*/



  return props.children
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <App>
        <Router>
          <Routes>
            <Route path="/" element={<Main/>} />
            <Route path="/actions" element={<Actions/>} />
            <Route path="/actions/:id" element={<Action />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/search/:type" element={<Search />} />
            <Route path="/auth" element={<Auth />} />
          </Routes>
        </Router>
      </App>
    </RecoilRoot>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
