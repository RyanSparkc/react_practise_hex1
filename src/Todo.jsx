import { useState } from "react";
import axios from "axios";
// api base url TodoList API
const baseUrl = 'https://todolist-api.hexschool.io';
// sign_up
const signUpUrl = `${baseUrl}/users/sign_up`;
// sign_in
const signInUrl = `${baseUrl}/users/sign_in`;
// checkout
const checkoutUrl = `${baseUrl}/users/checkout`;

function Todo() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    nickname: ''
  })

  const [token, setToken] = useState('');

  const handleEmailChange = (e) => {
    setFormData({ ...formData, email: e.target.value })
  }

  const handlePasswordChange = (e) => {
    setFormData({ ...formData, password: e.target.value })
  }

  const handleNicknameChange = (e) => {
    setFormData({ ...formData, nickname: e.target.value })
  }

  const handleSignUp = async () => {
    try {
      const response = await axios.post(signUpUrl, formData);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  const handleSignIn = async () => {
    try {
      const response = await axios.post(signInUrl, formData);
      console.log(response.data);
      setToken(response.data.token);
    } catch (error) {
      console.error(error);
    }
  }

  const handleCheckout = async () => {
    try {
      const response = await axios.get(checkoutUrl, {
        headers: {
          Authorization: `${token}`
        }
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <div className="sign-up">
        <h1>React js TodoList</h1>
        {token}
        <h2>註冊</h2>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" value={formData.email} onChange={handleEmailChange} />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" value={formData.password} onChange={handlePasswordChange} />
        <label htmlFor="nickname">Nickname</label>
        <input type="text" id="nickname" value={formData.nickname} onChange={handleNicknameChange} />
        <button onClick={handleSignUp}>註冊</button>
      </div>
      <div className="sign-in">
        <h2>登入</h2>
        <label htmlFor="email2">Email</label>
        <input type="email" id="email2" value={formData.email} onChange={handleEmailChange} />
        <label htmlFor="password2">Password</label>
        <input type="password" id="password2" value={formData.password} onChange={handlePasswordChange} />
        <button onClick={handleSignIn}>登入</button>
      </div>
      <div className="checkout">
        <h2>驗證登入</h2>
        <button onClick={handleCheckout}>驗證登入</button>
      </div>
    </>
  )
}

export default Todo;