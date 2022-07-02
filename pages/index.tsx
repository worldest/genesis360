import Layout from '../layouts/Main';
import PageIntro from '../components/page-intro';
import ProductsFeatured from '../components/products-featured';
import Footer from '../components/footer';
import Subscribe from '../components/subscribe';
import { useState } from 'react';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
const IndexPage = () => {
  const [packages, setPackage] = useState("")
  const [open, setOpen] = useState(false);
  const [desc, setDesc] = useState(<></>);
  const [button, setButton] = useState(<button></button>);
  const onCloseModal = () => setOpen(false);
  return (
    <Layout>
      <PageIntro />
      <ToastContainer
          
        />
      <Modal open={open} onClose={onCloseModal} center>
        <div className='p-5'>
          <h3>About Package</h3>
          <hr />
          <h4>{packages}</h4>
          <br />
          {desc}
          <br />
          {button}
        </div>
      </Modal>
      <section className="featured">
        <div className="container">
          <article style={{backgroundImage: 'url(/images/featured-1.jpg)'}} className="featured-item featured-item-large">
            <div className="featured-item__content">
              <h3>Single Package</h3>
              <button className="btn btn--rounded" onClick={() => {
                setOpen(true)
                setDesc(<>
                  <h5>Package for the singles</h5>
                  <hr />
                  <section className="section">
                    <div className="container">
                      <header className="section__intro">
                        <h4 style={{textAlign: "left"}}>What you get</h4>
                      </header>

                      <ul className="shop-data-items" style={{marginTop: -40}}>
                        <li>
                          <i className="icon-shipping"></i>
                          <div className="data-item__content">
                            <h4>20KG Bags of rice</h4>
                          </div>
                        </li>
                        
                        <li>
                          <i className="icon-shipping"></i>
                          <div className="data-item__content">
                            <h4>5 Litres of Groundnut Oil</h4>
                          </div>
                        </li>
                        
                        <li>
                          <i className="icon-shipping"></i>
                          <div className="data-item__content">
                            <h4>5 Litres of Palm Oil</h4>
                          </div>
                        </li>
                        
                        <li>
                          <i className="icon-shipping"></i>
                          <div className="data-item__content">
                            <h4>20 KG of beans</h4>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </section>
                </>)
                setPackage("Single Package");
                setButton(<button onClick={() => {
                  toast.info(`Checking Account Info`, {
                    position: toast.POSITION.TOP_RIGHT
                  });
                  setTimeout(() => {
                    var loggedIn = localStorage.getItem("userid");
                   var token = localStorage.getItem("token");
                    var data = new FormData();
                    data.append("userid", `${loggedIn}`);
                    data.append("package", "3");
                    if(loggedIn){
                      fetch(`https://genesis360.com.ng/api/Packages/OptIn.php`, {
                        headers: {
                          "Authorization": `Bearer ${token}`
                        },
                        method: "POST",
                        body: data
                      })
                      .then(response => response.json())
                      .then((res) => {
                        console.log(res);
                        if(res.code == 200){
                          toast.success(res.message, {
                            position: toast.POSITION.TOP_RIGHT
                          });
                        }else if(res.code == 401){
                          toast.error("An error occured, please login again", {
                            position: toast.POSITION.TOP_RIGHT
                          });
                          setTimeout(() => {
                            window.location.href = "/login"
                          }, 2000)
                        }else if(res.code == 302){
                          toast.error(res.message, {
                            position: toast.POSITION.TOP_RIGHT
                          });
                          setTimeout(() => {
                            window.location.href = "/kyc"
                          }, 2000)
                        }else{
                          toast.error(res.message, {
                            position: toast.POSITION.TOP_RIGHT
                          });
                        }
                      })
                    }else{
                      toast.info(`You are not logged in, please login or create account`, {
                        position: toast.POSITION.TOP_RIGHT
                      });
                      setTimeout(() => {
                        window.location.href = "/login"
                      }, 2000)
                    }
                  }, 4000)
                  
                }} className="btn btn--rounded btn--yellow">Subscribe to package</button>)
              }}>Opt-In</button>
            </div>
          </article>
          
          <article style={{backgroundImage: 'url(/images/featured-2.jpg)'}} className="featured-item featured-item-small-first">
            <div className="featured-item__content">
              <h3>Family of Two</h3>
              <button className="btn btn--rounded" onClick={() => {
                setOpen(true)
                setDesc(<>
                  <h5>Package for Family of Two</h5>
                  <hr />
                  <section className="section">
                    <div className="container">
                      <header className="section__intro">
                        <h4 style={{textAlign: "left"}}>What you get</h4>
                      </header>

                      <ul className="shop-data-items" style={{marginTop: -40}}>
                        <li>
                          <i className="icon-shipping"></i>
                          <div className="data-item__content">
                            <h4>30KG Bags of rice</h4>
                          </div>
                        </li>
                        
                        <li>
                          <i className="icon-shipping"></i>
                          <div className="data-item__content">
                            <h4>10 Litres of Groundnut Oil</h4>
                          </div>
                        </li>
                        
                        <li>
                          <i className="icon-shipping"></i>
                          <div className="data-item__content">
                            <h4>10 Litres of Palm Oil</h4>
                          </div>
                        </li>
                        
                        <li>
                          <i className="icon-shipping"></i>
                          <div className="data-item__content">
                            <h4>30 KG of beans</h4>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </section>
                </>)
                setPackage("Family of Two");
                setButton(<button onClick={() => {
                  toast.info(`Checking Account Info`, {
                    position: toast.POSITION.TOP_RIGHT
                  });
                  setTimeout(() => {
                    var loggedIn = localStorage.getItem("userid");
                    var token = localStorage.getItem("token");
                    var data = new FormData();
                    data.append("userid", `${loggedIn}`);
                    data.append("package", '4');
                    if(loggedIn){
                      fetch(`https://genesis360.com.ng/api/Packages/OptIn.php`, {
                        headers: {
                          "Authorization": `Bearer ${token}`
                        },
                        method: "POST",
                        body: data
                      })
                      .then(response => response.json())
                      .then((res) => {
                        console.log(res);
                        if(res.code == 200){
                          toast.success(res.message, {
                            position: toast.POSITION.TOP_RIGHT
                          });
                        }else if(res.code == 401){
                          toast.error("An error occured, please login again", {
                            position: toast.POSITION.TOP_RIGHT
                          });
                          setTimeout(() => {
                            window.location.href = "/login"
                          }, 2000)
                        }else if(res.code == 302){
                          toast.error(res.message, {
                            position: toast.POSITION.TOP_RIGHT
                          });
                          setTimeout(() => {
                            window.location.href = "/kyc"
                          }, 2000)
                        }else{
                          toast.error(res.message, {
                            position: toast.POSITION.TOP_RIGHT
                          });
                        }
                      })
                    }else{
                      toast.info(`You are not logged in, please login or create account`, {
                        position: toast.POSITION.TOP_RIGHT
                      });
                      setTimeout(() => {
                        window.location.href = "/login"
                      }, 2000)
                    }
                  }, 4000)
                  
                }} className="btn btn--rounded btn--yellow">Subscribe to package</button>)
              }}>Opt-In</button>
            </div>
          </article>
          
          <article style={{backgroundImage: 'url(/images/featured-3.jpg)'}} className="featured-item featured-item-small">
            <div className="featured-item__content">
              <h3>Family of Three</h3>
              <button className="btn btn--rounded" onClick={() => {
                setOpen(true)
                setDesc(<>
                  <h5>Package for Family of Three</h5>
                  <hr />
                  <section className="section">
                    <div className="container">
                      <header className="section__intro">
                        <h4 style={{textAlign: "left"}}>What you get</h4>
                      </header>

                      <ul className="shop-data-items" style={{marginTop: -40}}>
                        <li>
                          <i className="icon-shipping"></i>
                          <div className="data-item__content">
                            <h4>40KG Bags of rice</h4>
                          </div>
                        </li>
                        
                        <li>
                          <i className="icon-shipping"></i>
                          <div className="data-item__content">
                            <h4>15 Litres of Groundnut Oil</h4>
                          </div>
                        </li>
                        
                        <li>
                          <i className="icon-shipping"></i>
                          <div className="data-item__content">
                            <h4>15 Litres of Palm Oil</h4>
                          </div>
                        </li>
                        
                        <li>
                          <i className="icon-shipping"></i>
                          <div className="data-item__content">
                            <h4>40 KG of beans</h4>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </section>
                </>)
                setPackage("Family of Three");
                setButton(<button onClick={() => {
                  toast.info(`Checking Account Info`, {
                    position: toast.POSITION.TOP_RIGHT
                  });
                  setTimeout(() => {
                    var loggedIn = localStorage.getItem("userid");
                    var token = localStorage.getItem("token");
                    var data = new FormData();
                    data.append("userid", `${loggedIn}`);
                    data.append("package", '5');
                    if(loggedIn){
                      fetch(`https://genesis360.com.ng/api/Packages/OptIn.php`, {
                        headers: {
                          "Authorization": `Bearer ${token}`
                        },
                        method: "POST",
                        body: data
                      })
                      .then(response => response.json())
                      .then((res) => {
                        console.log(res);
                        if(res.code == 200){
                          toast.success(res.message, {
                            position: toast.POSITION.TOP_RIGHT
                          });
                        }else if(res.code == 401){
                          toast.error("An error occured, please login again", {
                            position: toast.POSITION.TOP_RIGHT
                          });
                          setTimeout(() => {
                            window.location.href = "/login"
                          }, 2000)
                        }else if(res.code == 302){
                          toast.error(res.message, {
                            position: toast.POSITION.TOP_RIGHT
                          });
                          setTimeout(() => {
                            window.location.href = "/kyc"
                          }, 2000)
                        }else{
                          toast.error(res.message, {
                            position: toast.POSITION.TOP_RIGHT
                          });
                        }
                      })
                    }else{
                      toast.info(`You are not logged in, please login or create account`, {
                        position: toast.POSITION.TOP_RIGHT
                      });
                      setTimeout(() => {
                        window.location.href = "/login"
                      }, 2000)
                    }
                  }, 4000)
                  
                }} className="btn btn--rounded btn--yellow">Subscribe to package</button>)
              }}>Opt-In</button>
            </div>
          </article>
          
        </div>
      </section>

      <section className="section">
        <div className="container">
          <header className="section__intro">
            <h4>Why should you choose us?</h4>
          </header>

          <ul className="shop-data-items">
            <li>
              <i className="icon-shipping"></i>
              <div className="data-item__content">
                <h4>Fast Shipping/Delivery</h4>
                <p>Shipping and delivery commences immediately after purchase is complete</p>
              </div>
            </li>
            
            <li>
              <i className="icon-payment"></i>
              <div className="data-item__content">
                <h4>Easy Payments</h4>
                <p>All payments are processed instantly over a secure payment protocol.</p>
              </div>
            </li>
            
            <li>
              <i className="icon-cash"></i>
              <div className="data-item__content">
                <h4>Money-Back Guarantee</h4>
                <p>If an item arrived damaged or you've changed your mind, you can send it
                back for a full refund.</p>
              </div>
            </li>
            
            <li>
              <i className="icon-materials"></i>
              <div className="data-item__content">
                <h4>Finest Quality</h4>
                <p>Designed to last.</p>
              </div>
            </li>
          </ul>
        </div>
      </section>
 
      <ProductsFeatured />
      <Subscribe />
      <Footer />
    </Layout>
  )
}


export default IndexPage