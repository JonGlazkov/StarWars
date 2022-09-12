import React, { useContext } from 'react';
import { signIn } from '../../services/auth';
import AuthContext from '../../context/auth';

export const SignIn = (e) => {
  const { signed } = useContext(AuthContext)
  e.preventDefault()
  console.log(signed);
  async function handleSignIn() {
    const response = await signIn();


    console.log(response)
  }
  handleSignIn();
}