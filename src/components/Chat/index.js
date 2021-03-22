import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { messages } from '../../utils/messages';

import { ChatToggle, Content, SpeechBubble } from './styles';

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
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      city: Yup.string()
        .min(3, 'Must be a valid city')
        .required('Required'),
      birth: Yup.number()
        .lessThan(8, 'Invalid birth number')
        .required('Required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
      rating: Yup.number()
        .lessThan(5, 'Invalid rating')
        .required('Required'),
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
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
                  <div>
                    <p>🤖</p>
                    <SpeechBubble>{item.message}</SpeechBubble>
                  </div>
                ) : null}
              </div>
            );
          })}
          <label htmlFor="fullName">
            First Name
            <input
              id="fullName"
              name="fullName"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.fullName}
            />
          </label>
          {formik.touched.fullName && formik.errors.fullName ? (
            <div>{formik.errors.fullName}</div>
          ) : null}

          {messages.map(item => {
            return (
              <div key={item.id}>
                {item.id === 2 ? (
                  <div>
                    <p>🤖</p>
                    <SpeechBubble>{item.message}</SpeechBubble>
                  </div>
                ) : null}
              </div>
            );
          })}
          <label htmlFor="city">
            City
            <input
              id="city"
              name="city"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.city}
            />
          </label>
          {formik.touched.city && formik.errors.city ? (
            <div>{formik.errors.city}</div>
          ) : null}

          {messages.map(item => {
            return (
              <div key={item.id}>
                {item.id === 3 ? (
                  <div>
                    <p>🤖</p>
                    <SpeechBubble>{item.message}</SpeechBubble>
                  </div>
                ) : null}
              </div>
            );
          })}
          <label htmlFor="birth">
            Birth
            <input
              id="birth"
              name="birth"
              type="birth"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.birth}
            />
          </label>
          {formik.touched.birth && formik.errors.birth ? (
            <div>{formik.errors.birth}</div>
          ) : null}

          {messages.map(item => {
            return (
              <div key={item.id}>
                {item.id === 4 ? (
                  <div>
                    <p>🤖</p>
                    <SpeechBubble>{item.message}</SpeechBubble>
                  </div>
                ) : null}
              </div>
            );
          })}
          <label htmlFor="email">
            Email Address
            <input
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
          </label>
          {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
          ) : null}

          {messages.map(item => {
            return (
              <div key={item.id}>
                {item.id === 5 ? (
                  <div>
                    <p>🤖</p>
                    <SpeechBubble>{item.message}</SpeechBubble>
                  </div>
                ) : null}
              </div>
            );
          })}
          <label htmlFor="rating">
            Rating
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

          <button type="submit">Submit</button>
        </form>
      </Content>
    </>
  );
}

export default Chat;
