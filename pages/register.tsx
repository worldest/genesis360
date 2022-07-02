import Layout from '../layouts/Main';
import Link from 'next/link';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { useState } from 'react';
function RegisterPage(){
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  return(
  <Layout>
    \
    <section className="form-page">
    <ToastContainer
          
          />
      <div className="container">
        <div className="back-button-section">
          <Link href="/products">
            <a><i className="icon-left"></i> Back to store</a>
          </Link>
        </div>

        <div className="form-block">
          <h2 className="form-block__title">Create an account and discover the benefits</h2>
          {/* <p className="form-block__description">Lorem Ipsum is simply dummy text of the printing 
          and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
           */}
          <form className="form" method="POST" onSubmit={(e) => {
              e.preventDefault();
              var form  = new FormData();
              form.append("email", email);
              form.append("phone", phone);
              form.append("lastname", lastname);
              form.append("firstname", firstname);
              form.append("password", password);
              fetch(`https://genesis360.com.ng/api/Auth/Register.php`, {
                method: "POST",
                body: form
              })
              .then(response => response.json())
              .then((data_) => {
                if(data_.code == 200){
                  toast.success(data_.message, {
                    position: toast.POSITION.TOP_RIGHT
                  });
                  setTimeout(() => {
                    window.location.href = "/login";
                  }, 2000)
                }else{
                  toast.error(data_.message, {
                    position: toast.POSITION.TOP_RIGHT
                  });
                }
                
              })
            }}>
            <div className="form__input-row">
              <input onChange={(e) => {
                    setFirstname(e.target.value)
                  }} className="form__input" placeholder="First Name" type="text" id="firstname" required />
            </div>
            
            <div className="form__input-row">
              <input onChange={(e) => {
                    setLastname(e.target.value)
                  }} className="form__input" placeholder="Last Name" type="text" id="lastname" required />
            </div>
            
            <div className="form__input-row">
              <input onChange={(e) => {
                    setEmail(e.target.value)
                  }} className="form__input" placeholder="Email" type="text" id="email" required />
            </div>

            <div className="form__input-row">
              <input onChange={(e) => {
                    setPhone(e.target.value)
                  }} className="form__input" placeholder="Phone" type="number" id="phone" required />
            </div>
            
            <div className="form__input-row">
              <input onChange={(e) => {
                    setPassword(e.target.value)
                  }} className="form__input" type="Password" placeholder="Password" id="password" required />
            </div>

            <div className="form__info">
              <div className="checkbox-wrapper">
                <label htmlFor="check-signed-in" className={`checkbox checkbox--sm`}>
                  <input name="signed-in" type="checkbox" id="check-signed-in" required />
                  <span className="checkbox__check"></span>
                    <p>I agree to the Google Terms of Service and Privacy Policy</p>
                </label>
              </div>
            </div>

            <button type="submit" className="btn btn--rounded btn--yellow btn-submit">Sign up</button>

            <p className="form__signup-link">
              <Link href="/login">
                <a href="#">Are you already a member?</a>
              </Link>
            </p>
          </form>
        </div>

      </div>
    </section>
  </Layout>
)
                }
  
export default RegisterPage
  