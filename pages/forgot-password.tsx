import Layout from '../layouts/Main';
import Link from 'next/link';

type ForgotMail = {
  email: string;
}

const ForgotPassword = () => {
  

  return (
    <Layout>
      <section className="form-page">
        <div className="container">
          <div className="back-button-section">
            <Link href="/products">
              <a><i className="icon-left"></i> Back to shop</a>
            </Link>
          </div>

          <div className="form-block">
            <h2 className="form-block__title">Forgot your password?</h2>
            <p className="form-block__description">Enter your email or phone number and recover your account</p>
            
            <form className="form" onSubmit={() => {}}>
              <div className="form__input-row">
                <input 
                  className="form__input" 
                  placeholder="email" 
                  type="text" 
                  name="email"
                  
                />

                
              </div>
              
              <div className="form__input-row">
                <input 
                  className="form__input" 
                  type="password" 
                  placeholder="Password" 
                  name="password"
                />
               
              </div>

              <button type="submit" className="btn btn--rounded btn--yellow btn-submit">Reset password</button>
            </form>
          </div>

        </div>
      </section>
    </Layout>
  )
}
  
export default ForgotPassword