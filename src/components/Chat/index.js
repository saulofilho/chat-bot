import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import InputMask from 'react-input-mask';
import { messages } from '../../utils/messages';
import api from '../../services/api';

import {
  ChatToggle,
  Content,
  SpeechWrapper,
  SpeechBot,
  SpeechBubble,
  SaveBtn,
  InputWrapper,
} from './styles';

function Chat() {
  const [isToggled, setIsToggled] = useState(false);

  const toggle = () => {
    setIsToggled(!isToggled);
  };

  const formik = useFormik({
    initialValues: {
      fullName: '',
      city: '',
      birth: '',
      email: '',
      rating: 0,
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
      alert(JSON.stringify(values, null, 2));
      // eslint-disable-next-line no-console
      console.log(JSON.stringify(values, null, 2));
      await api
        .post(JSON.stringify(values, null, 2))
        .then(response => {
          // eslint-disable-next-line no-console
          console.log('responsesss', response.data);
        })
        .catch(err => {
          // eslint-disable-next-line no-console
          console.log('err', err.message);
        });
    },
  });

  return (
    <>
      <ChatToggle onClick={() => toggle()}>
        {!isToggled ? 'Olá' : 'x'}
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
          <InputWrapper>
            <label htmlFor="fullName">
              <input
                id="fullName"
                name="fullName"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.fullName}
                placeholder="Nome e sobrenome"
              />
              <button type="button">teste</button>
            </label>
            {formik.touched.fullName && formik.errors.fullName ? (
              <div>{formik.errors.fullName}</div>
            ) : null}
          </InputWrapper>

          {messages.map(item => {
            return (
              <div key={item.id}>
                {item.id === 2 ? (
                  <SpeechWrapper>
                    <SpeechBot>🤖</SpeechBot>
                    <SpeechBubble>{item.message}</SpeechBubble>
                  </SpeechWrapper>
                ) : null}
              </div>
            );
          })}
          <InputWrapper>
            <label htmlFor="city">
              <input
                id="city"
                name="city"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.city}
                placeholder="Cidade"
              />
            </label>
            {formik.touched.city && formik.errors.city ? (
              <div>{formik.errors.city}</div>
            ) : null}
          </InputWrapper>

          {messages.map(item => {
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
          <InputWrapper>
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
          </InputWrapper>

          {messages.map(item => {
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
          <InputWrapper>
            <label htmlFor="email">
              <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                placeholder="seu@email.com"
              />
            </label>
            {formik.touched.email && formik.errors.email ? (
              <div>{formik.errors.email}</div>
            ) : null}
          </InputWrapper>

          {messages.map(item => {
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
          <InputWrapper>
            <label htmlFor="rating">
              <input
                id="rating"
                name="rating"
                type="rating"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.rating}
              />
            </label>
            {formik.touched.rating && formik.errors.rating ? (
              <div>{formik.errors.rating}</div>
            ) : null}
          </InputWrapper>

          <SaveBtn type="submit">Salvar</SaveBtn>
        </form>
      </Content>
    </>
  );
}

export default Chat;
