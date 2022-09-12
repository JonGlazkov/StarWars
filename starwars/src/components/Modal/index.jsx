import React, { useContext } from 'react';
import * as yup from "yup"
import { Formik } from "formik"
import { signIn } from '../../services/auth';

import logo from "../../assets/logo.svg"

import {
  ModalContainer,
  Container,
  CloseButton,
  Content,
  ContentContainer,
  Form,
} from './styles';
import { SignIn } from '../../pages/SignIn';

export const Modal = ({ id = 'modal', onClose = () => { }, children }) => {


  const handleOutsideClick = (e) => {
    if (e.target.id === id) {
      onClose()
    }
  }

  return (
    <ModalContainer
      id="modal"
      onClick={handleOutsideClick}
    >
      <Container>
        <CloseButton onClick={onClose} />
        <Content>
          {children}
          <ContentContainer>
            <img src={logo} alt="" />
            <Formik
              initialValues={{ email: '', password: '' }}
              validationSchema={
                yup.object().shape({
                  email: yup.string().email('Invalid email').required('Email is required'),
                  password: yup.string().max(10).required('Password is required'),
                })
              }
            >
              {(formik) => (
                <Form>
                  <label htmlFor="email">E-mail</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder='Enter your email address'

                  />
                  {formik.errors.email && formik.touched.email ? <p>{(formik.errors.email)}</p> : null}
                  <label htmlFor="password">Password</label>
                  <input
                    id='password'
                    type="password"
                    name="password"
                    placeholder="********"
                  />
                  {formik.errors.password && formik.touched.password ? <p>{(formik.errors.password)}</p> : null}
                  <button
                    type='submit'
                    onClick={() => SignIn()}
                  >Login</button>
                </Form>
              )}
            </Formik>


          </ContentContainer>
        </Content>
      </Container>
    </ModalContainer>
  )
}
