import { useRecoilState } from 'recoil';
import { isAuthorisedState } from '@scripts/atoms/authState';
//import { login } from '@api/login';
import {accDataAtom } from '@scripts/atoms/accDataAtom'

function useAuth() {
  const [isAuthorised, setIsAuthorised] = useRecoilState(isAuthorisedState);
  const [accData, setAccData] = useRecoilState(accDataAtom)


  const initUser = async () => {
    const token = localStorage.getItem('token');
      if (!isAuthorised && token) {
        //const responseLogin = await login();
        setIsAuthorised(true)
        //setAccData(responseLogin.item)
      }
  }

  return {
    isAuthorised,
    setIsAuthorised,
    initUser,
    accData
  };
}

export default useAuth;
