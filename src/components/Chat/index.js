/* eslint-disable no-alert */
import React, { useState, useEffect, useRef } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import InputMask from 'react-input-mask';
import { messages } from '../../utils/messages';
import api from '../../services/api';
import apiBrazilCity from '../../services/apiBrazilCity';

import {
  ChatToggle,
  Content,
  SpeechWrapper,
  SpeechBot,
  SpeechBubble,
  SaveBtn,
  InputWrapper,
  InputStatus,
  InputErrorWrapper,
  InputErrorWrapperStars,
  AutoCompleteOptions,
  CityButton,
} from './styles';

function Chat() {
  const [isToggled, setIsToggled] = useState(false);
  const [brazilCities, setBrazilCities] = useState([]);
  const wrapperRef = useRef(null);
  const [display, setDisplay] = useState('');

  const toggle = () => {
    setIsToggled(!isToggled);
  };

  const formik = useFormik({
    initialValues: {
      fullName: '',
      city: '',
      birth: '',
      email: '',
      rating: '',
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .max(15, 'Deve conter 15 caracteres ou menos.')
        .required('Requirido'),
      city: Yup.string()
        .min(4, 'Deve ser uma cidade válida.')
        .required('Requirido'),
      birth: Yup.string()
        .matches(
          /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/,
          'Data de nascimento inválida.'
        )
        .required('Requirido'),
      email: Yup.string()
        .email('Email inválido.')
        .required('Requirido'),
      rating: Yup.number().required('Requirido'),
    }),
    onSubmit: async values => {
      await api
        .post('users', values)
        .then(response => {
          alert('Dados enviados com sucesso.', response.data);
        })
        .catch(err => {
          alert('Ops! Algo deu errado.', err.message);
        });
    },
  });

  const fetchBrazilCities = async () => {
    await apiBrazilCity
      .get()
      .then(response => {
        const citySelected = response.data.map(item => item.nome);

        setBrazilCities([...citySelected]);
      })
      .catch(err => {
        alert('Ops! Algo deu errado com a requisição.', err.message);
      });
  };

  const handleClickOutside = event => {
    const { current: wrap } = wrapperRef;
    if (wrap && !wrap.contains(event.target)) {
      setDisplay(false);
    }
  };

  useEffect(() => {
    fetchBrazilCities();

    window.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <ChatToggle onClick={() => toggle()}>
        {!isToggled ? 'Olá' : 'Tchau'}
      </ChatToggle>
      <Content hide={isToggled}>
        <form onSubmit={formik.handleSubmit}>
          {messages.map(item => {
            return (
              <div key={item.id}>
                {item.id === 1 ? (
                  <SpeechWrapper>
                    <SpeechBot>🤖</SpeechBot>
                    <SpeechBubble>{item.message}</SpeechBubble>
                  </SpeechWrapper>
                ) : null}
              </div>
            );
          })}
          <InputWrapper status={!formik.errors.fullName}>
            <InputErrorWrapper>
              <input
                id="fullName"
                name="fullName"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.fullName}
                placeholder="Nome e sobrenome"
              />
              {formik.touched.fullName && formik.errors.fullName ? (
                <div>{formik.errors.fullName}</div>
              ) : null}
            </InputErrorWrapper>
            <InputStatus status={!formik.errors.fullName} />
          </InputWrapper>

          {formik.touched.fullName &&
            !formik.errors.fullName &&
            messages.map(item => {
              return (
                <div key={item.id}>
                  {item.id === 2 ? (
                    <SpeechWrapper>
                      <SpeechBot>🤖</SpeechBot>
                      <SpeechBubble>
                        Que satisfação, {formik.values.fullName}. {item.message}
                      </SpeechBubble>
                    </SpeechWrapper>
                  ) : null}
                </div>
              );
            })}
          {formik.touched.fullName && !formik.errors.fullName ? (
            <InputWrapper status={!formik.errors.city}>
              <InputErrorWrapper>
                <input
                  id="city"
                  name="city"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.city}
                  placeholder="Cidade"
                  onClick={() => setDisplay(!display)}
                />

                {display && (
                  <AutoCompleteOptions>
                    {brazilCities
                      .filter(item =>
                        item
                          .toLowerCase()
                          .includes(formik.values.city.toLowerCase())
                      )
                      .map((item, i) => {
                        return (
                          <CityButton
                            // eslint-disable-next-line react/no-array-index-key
                            key={i}
                            onClick={() => formik.setFieldValue('city', item)}
                            type="button"
                          >
                            <p>{item}</p>
                          </CityButton>
                        );
                      })}
                  </AutoCompleteOptions>
                )}
                {formik.touched.city && formik.errors.city ? (
                  <div>{formik.errors.city}</div>
                ) : null}
              </InputErrorWrapper>
              <InputStatus status={!formik.errors.city} />
            </InputWrapper>
          ) : null}

          {formik.touched.city &&
            !formik.errors.city &&
            messages.map(item => {
              return (
                <div key={item.id}>
                  {item.id === 3 ? (
                    <SpeechWrapper>
                      <SpeechBot>🤖</SpeechBot>
                      <SpeechBubble>{item.message}</SpeechBubble>
                    </SpeechWrapper>
                  ) : null}
                </div>
              );
            })}
          {formik.touched.city && !formik.errors.city ? (
            <InputWrapper status={!formik.errors.birth}>
              <InputErrorWrapper>
                <InputMask
                  mask="99/99/9999"
                  id="birth"
                  name="birth"
                  type="birth"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.birth}
                  placeholder="00/00/0000"
                />
                {formik.touched.birth && formik.errors.birth ? (
                  <div>{formik.errors.birth}</div>
                ) : null}
              </InputErrorWrapper>
              <InputStatus status={!formik.errors.birth} />
            </InputWrapper>
          ) : null}

          {formik.touched.birth &&
            !formik.errors.birth &&
            messages.map(item => {
              return (
                <div key={item.id}>
                  {item.id === 4 ? (
                    <SpeechWrapper>
                      <SpeechBot>🤖</SpeechBot>
                      <SpeechBubble>{item.message}</SpeechBubble>
                    </SpeechWrapper>
                  ) : null}
                </div>
              );
            })}
          {formik.touched.birth && !formik.errors.birth ? (
            <InputWrapper status={!formik.errors.email}>
              <InputErrorWrapper>
                <input
                  id="email"
                  name="email"
                  type="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  placeholder="seu@email.com"
                />
                {formik.touched.email && formik.errors.email ? (
                  <div>{formik.errors.email}</div>
                ) : null}
              </InputErrorWrapper>
              <InputStatus status={!formik.errors.email} />
            </InputWrapper>
          ) : null}

          {formik.touched.email &&
            !formik.errors.email &&
            messages.map(item => {
              return (
                <div key={item.id}>
                  {item.id === 5 ? (
                    <SpeechWrapper>
                      <SpeechBot>🤖</SpeechBot>
                      <SpeechBubble>{item.message}</SpeechBubble>
                    </SpeechWrapper>
                  ) : null}
                </div>
              );
            })}
          {formik.touched.email && !formik.errors.email ? (
            <InputWrapper status={!formik.errors.email}>
              <InputErrorWrapperStars>
                <label htmlFor="rating">
                  <input
                    id="rating"
                    name="rating"
                    type="radio"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={5}
                  />
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#393939"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <input
                    id="rating"
                    name="rating"
                    type="radio"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={4}
                  />
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#393939"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <input
                    id="rating"
                    name="rating"
                    type="radio"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={3}
                  />
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#393939"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <input
                    id="rating"
                    name="rating"
                    type="radio"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={2}
                  />
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#393939"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <input
                    id="rating"
                    name="rating"
                    type="radio"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={1}
                  />
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#393939"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                </label>
                {formik.touched.rating && formik.errors.rating ? (
                  <div>{formik.errors.rating}</div>
                ) : null}
              </InputErrorWrapperStars>
              <InputStatus status={!formik.errors.rating} />
            </InputWrapper>
          ) : null}

          <SaveBtn type="submit">Salvar</SaveBtn>
        </form>
      </Content>
    </>
  );
}

export default Chat;
