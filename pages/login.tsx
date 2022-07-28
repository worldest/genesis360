import Layout from '../layouts/Main';
import Link from 'next/link';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { useState } from 'react';
type LoginMail = {
  email: string;
  password: string;
}

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Layout>
      <ToastContainer
          
        />
      <section className="form-page">
        <div className="container">
          <div className="back-button-section">
            <Link href="/products">
              <a><i className="icon-left"></i> Back to store</a>
            </Link>
          </div>

          <div className="form-block">
            <h2 className="form-block__title">Log in</h2>
            <p className="form-block__description">Lorem Ipsum is simply dummy text of the printing and typesetting 
            industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
            
            <form className="form" onSubmit={(e) => {
              e.preventDefault();
              var data = new FormData();
              data.append("email", email);
              data.append("password", password);
              fetch("https://orangli.com/server/api/Auth/Login.php", {
                method: "POST",
                body: data
              })
              .then(response => response.json())
              .then((res) => {
                console.log(res)
                if(res.code == 200){
                  toast.success(`${res.message}`, {
                    position: toast.POSITION.TOP_RIGHT
                  });
                  localStorage.setItem("userid", res.user_id);
                  localStorage.setItem("token", res.token);
                  window.location.href = "/"
                }else{
                  toast.error(`${res.message}`, {
                    position: toast.POSITION.TOP_RIGHT
                  });
                }
              })
            }}>
              <div className="form__input-row">
                <input 
                  className="form__input" 
                  placeholder="email" 
                  type="text" 
                  id="email"
                  name="email"
                  onChange={(e) => {
                    setEmail(e.target.value)
                  }}
                />

                
              </div>
              
              <div className="form__input-row">
                <input 
                  className="form__input" 
                  type="password" 
                  id="password"
                  onChange={(e) => {
                    setPassword(e.target.value)
                  }}
                  placeholder="Password" 
                  name="password"
                />
              </div>

              <div className="form__info">
                <div className="checkbox-wrapper">
                  <label htmlFor="check-signed-in" className={`checkbox checkbox--sm`}>
                    <input 
                      type="checkbox" 
                      name="keepSigned" 
                      id="check-signed-in" 
                    />
                    <span className="checkbox__check"></span>
                    <p>Keep me signed in</p>
                  </label>
                </div>
                <a href="/forgot-password" className="form__info__forgot-password">Forgot password?</a>
              </div>
              <button type="submit" className="btn btn--rounded btn--yellow btn-submit">Sign in</button>

              <p className="form__signup-link">Not a member yet? <a href="/register">Sign up</a></p>
            </form>
          </div>

        </div>
      </section>
    </Layout>
  )
}
  
export default LoginPage
  