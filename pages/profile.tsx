import Layout from '../layouts/Main';
import CheckoutItems from '../components/checkout/items';
import { useState, useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const Profile = () => {
    const [email, setEmail] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [gender, setGender] = useState("");
    const [phone, setPhone] = useState("");
    const [sub, setSub] = useState([]);
    useEffect(() => {
        var userid = localStorage.getItem("userid");
        var token = localStorage.getItem("token");
        fetch(`https://orangli.com/server/api/User/getUser.php?userid=${userid}`, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
        })
        .then(response => response.json())
        .then((res) => {
        console.log(res);
        if(res.code == 200){
            toast.success(res.message, {
              position: toast.POSITION.TOP_RIGHT
            });
            setFirstname(res.user.first_name);
            setEmail(res.user.email);
            setLastname(res.user.last_name);
            setPhone(res.user.phone);
          }else if(res.code == 401){
            toast.error("An error occured, please login again", {
              position: toast.POSITION.TOP_RIGHT
            });
            setTimeout(() => {
              window.location.href = "/login"
            }, 2000)
          }
        })

        fetch(`https://orangli.com/server/api/User/getKYC.php?userid=${userid}`, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
        })
        .then(response => response.json())
        .then((res) => {
        console.log(res);
        if(res.code == 200){
            toast.info("You have filled/completed your KYC", {
              position: toast.POSITION.TOP_RIGHT
            });
            setGender(res.kyc.gender);
          }else if(res.code == 401){
            toast.error("An error occured, please login again", {
              position: toast.POSITION.TOP_RIGHT
            });
            setTimeout(() => {
              window.location.href = "/login"
            }, 2000)
          }
        })

        fetch(`https://orangli.com/server/api/Products/getSubscription.php?userid=${userid}`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
            })
            .then(response => response.json())
            .then((res) => {
            console.log(res);
            if(res.code == 200){
                setSub(res.sub)
              }else if(res.code == 401){
                toast.error("An error occured, please login again", {
                  position: toast.POSITION.TOP_RIGHT
                });
                setTimeout(() => {
                  window.location.href = "/login"
                }, 2000)
              }
            })
    }, [])


  return (
    <Layout>
        <ToastContainer
          
          />
      <section className="cart">
        <div className="container">
          <div className="cart__intro">
          <h3 className="cart__title">{firstname + " " + lastname}</h3>
          <button onClick={() => {
                    window.location.href = "/login"
                }} className="btn btn--rounded btn--yellow">Log Out</button>
          </div>

          <div className="checkout-content">
            <div className="checkout__col-6">
              <div className="checkout__btns">
                <button onClick={() => {
                    window.location.href = "/kyc"
                }} className="btn btn--rounded btn--yellow">View KYC</button>
                <button style={{width: "auto !important"}} onClick={() => {
                    window.location.href = "/profile"
                }} className="btn btn--rounded btn--border">Products</button>
              </div>

              <div className="block">
                <h3 className="block__title">Account information</h3>
                <form className="form">
                  <div className="form__input-row form__input-row--two">
                    <div className="form__col">
                      <input onChange={(e) => {
                        setEmail(e.target.value)
                      }} value={email} className="form__input form__input--sm" type="text" placeholder="Email" />
                    </div>

                    <div className="form__col">
                      <input className="form__input form__input--sm" type="text" placeholder="Address" />
                    </div>
                  </div>
                  
                  <div className="form__input-row form__input-row--two">
                    <div className="form__col">
                      <input onChange={(e) => {
                        setFirstname(e.target.value)
                      }} className="form__input form__input--sm" value={firstname} type="text" placeholder="First name" />
                    </div>

                    <div className="form__col">
                      <input className="form__input form__input--sm" type="text" placeholder="City" />
                    </div>
                  </div>
                  
                  <div className="form__input-row form__input-row--two">
                    <div className="form__col">
                      <input  onChange={(e) => {
                        setLastname(e.target.value)
                      }} className="form__input form__input--sm" type="text" value={lastname} placeholder="Last name" />
                    </div>

                    <div className="form__col">
                      <input className="form__input form__input--sm" type="text" placeholder="Postal code / ZIP" />
                    </div>
                  </div>

                  <div className="form__input-row form__input-row--two">
                    <div className="form__col">
                      <input value={phone}  onChange={(e) => {
                        setPhone(e.target.value)
                      }} className="form__input form__input--sm" type="text" placeholder="Phone number" />
                    </div>

                    <div className="form__col">
                      <div className="select-wrapper select-form">
                        <select onChange={(e) => {
                        setGender(e.target.value)
                      }}>
                          <option>{gender}</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            
            <div className="checkout__col-4">
              <div className="block">
                <h3 className="block__title">Active Subscription</h3>
                {
                    sub.map((obj, index) => {
                        return(
                            <div key={index} style={{width: "100%", padding: 20, borderRadius: 10, borderWidth: 1, border: "1px solid #c4c5c6", boxShadow: "1px 1px 11px 1px #eee", marginTop: 20, marginBottom: 20,}}>
                            <h4>{obj.package.package_name}</h4><br />
                            <p>NGN {obj.sub_info.price}</p><br />
                            <h4>Status: {obj.sub_info.status == 0 ? "Pending" : "Approved"}</h4>
                            </div>
                        )
                    })
                }
                <div className="cart-actions__items-wrapper">
                    <button onClick={() => {
                        window.location.href = "/products"
                    }} type="button" className="btn btn--rounded btn--border">Add More items</button>
                    <br /><br />
                    <button onClick={() => {
                        window.location.href = "https://wa.me/2349135403118"
                    }} type="button" className="btn btn--rounded btn--yellow">Report an issue</button>
                </div>
              </div>
            </div>
            
            <div className="checkout__col-2">
              <div className="block" style={{height: 500, overflowY: "auto"}}>
                <h3 className="block__title">Orders</h3>
                <CheckoutItems />
              </div>
            </div>
          </div>
          
          <div className="cart-actions cart-actions--checkout">
            <a href="#save" className="cart__btn-back btn--border btn btn--rounded"><i className="icon-user"></i> Save Information</a>
            {/* <div className="cart-actions__items-wrapper">
              <button type="button" className="btn btn--rounded btn--border">Continue shopping</button>
              <button type="button" className="btn btn--rounded btn--yellow">Proceed to payment</button>
            </div> */}
          </div>
        </div>
      </section>
    </Layout>
  )
};

  
export default Profile