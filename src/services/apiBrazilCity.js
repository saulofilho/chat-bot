import axios from 'axios';

const apiBrazilCity = axios.create({
  baseURL: 'https://servicodados.ibge.gov.br/api/v1/localidades/municipios',
});

export default apiBrazilCity;
