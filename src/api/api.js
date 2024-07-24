import { create } from 'apisauce'


export const api = create({
  baseURL: 'https://nf.kvokka.net/api/',
  headers: { Accept: "application/json" },
})
api.addRequestTransform(request => {
  const token = localStorage.getItem('token', false);
  if (token) {
    request.headers['Authorization'] = `Bearer ${token}`
  } 
})