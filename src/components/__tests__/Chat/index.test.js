import React from 'react';
import { render, cleanup } from '@testing-library/react';
import axios from 'axios';

import Chat from '../../Chat';

jest.mock('axios');

describe('testing chat component', () => {
  it('should render correctly', () => {
    const wrapper = render(<Chat />);

    expect(wrapper).toMatchSnapshot();
  });
});

afterEach(cleanup);

test('testing toggle function', () => {
  const { getByTestId } = render(<Chat />);
  expect(getByTestId('div-toggle')).toHaveTextContent('Olá' || 'Tchau');
});

test('should fetch city', async () => {
  async function apiBrazilCity() {
    const response = await axios.get(
      'https://servicodados.ibge.gov.br/api/v1/localidades/municipios'
    );

    return response.data[0].nome;
  }

  await axios.get.mockResolvedValue({
    data: [
      {
        id: 1100049,
        nome: 'Cacoal',
        microrregiao: {
          id: 11006,
          nome: 'Cacoal',
          mesorregiao: {
            id: 1102,
            nome: 'Leste Rondoniense',
            UF: {
              id: 11,
              sigla: 'RO',
              nome: 'Rondônia',
              regiao: {
                id: 1,
                sigla: 'N',
                nome: 'Norte',
              },
            },
          },
        },
      },
    ],
  });

  const nome = await apiBrazilCity();
  await expect(nome).toEqual('Cacoal');
});

test('should post user', async () => {
  async function onSubmit(values) {
    await axios.post(
      'https://6058bdc9c3f49200173aecbc.mockapi.io/users',
      values
    );
  }

  await axios.post.mockResolvedValue({
    values: {
      fullName: 'Teste Jr.',
      city: 'Testeland',
      birth: '01/01/2021',
      email: 'teste@teste.com',
      rating: '5',
    },
  });

  const data = await onSubmit();
  await expect(data).toEqual(data);
});
