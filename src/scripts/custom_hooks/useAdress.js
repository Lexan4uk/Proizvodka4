import { useRecoilState } from 'recoil';
import { selectedCityAtom } from '@scripts/atoms/selectedCityAtom'

function useAdress() {
  const [selectedCity, setSelectedCity] = useRecoilState(selectedCityAtom);

  const selectCity = async (data) => {
    await setSelectedCity(data)
    console.log(data)
  }

  return {
    selectCity,
    selectedCity
  };
}

export default useAdress;
