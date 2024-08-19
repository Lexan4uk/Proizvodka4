import { atom } from 'recoil';

export const selectedCityAtom = atom({
  key: 'selectedCity',
  default: undefined,
});