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
  InputStatus,
  InputErrorWrapper,
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

          {messages.map(item => {
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
              />
              {formik.touched.city && formik.errors.city ? (
                <div>{formik.errors.city}</div>
              ) : null}
            </InputErrorWrapper>
            <InputStatus status={!formik.errors.city} />
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
          <InputWrapper status={!formik.errors.email}>
            <InputErrorWrapper>
              <input
                id="rating"
                name="rating"
                type="rating"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.rating}
              />
              {formik.touched.rating && formik.errors.rating ? (
                <div>{formik.errors.rating}</div>
              ) : null}
            </InputErrorWrapper>
            <InputStatus status={!formik.errors.birth} />
          </InputWrapper>

          <SaveBtn type="submit">Salvar</SaveBtn>
        </form>
      </Content>
    </>
  );
}

export default Chat;
