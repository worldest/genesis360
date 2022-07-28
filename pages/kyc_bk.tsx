import Layout from '../layouts/Main';
import { useSelector } from 'react-redux';
import CheckoutStatus from '../components/checkout-status';
import CheckoutItems from '../components/checkout/items';
import { RootState } from 'store';
import { useEffect, useState } from 'react';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
const KYC = () => {
    const [email, setEmail] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [gender, setGender] = useState("");
    const [income, setIncome] = useState("");
    const [remita, setRemita] = useState("");
    const [num, setNum] = useState("");
    const [disabled_, setDisabled] = useState(false);
    const [status, setStatus] = useState(null);
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
            setIncome(res.kyc.income);
            setRemita(res.kyc.remita);
            setNum(res.kyc.family_num);
            setStatus(res.kyc.status);
            setDisabled(true);
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
          <form method="POST" onSubmit={(e) => {
            e.preventDefault();
            var userid = localStorage.getItem("userid");
            var token = localStorage.getItem("token");
            var data = new FormData();
            
            data.append("num", num)
            data.append("income", income)
            data.append("gender", gender)
            data.append("remita", remita)
            data.append("userid", `${userid}`)
            fetch(`https://orangli.com/server/api/User/setKYC.php`, {
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
                    toast.info(res.message, {
                    position: toast.POSITION.TOP_RIGHT
                    });
                    
                }else if(res.code == 401){
                    toast.error("An error occured, please login again", {
                    position: toast.POSITION.TOP_RIGHT
                    });
                    setTimeout(() => {
                    window.location.href = "/login"
                    }, 2000)
                }
                })
          }}>
      <section className="cart">
        <div className="container">
          <div className="cart__intro">
            <h3 className="cart__title">Complete KYC</h3>
            <a onClick={() => {
                // window.location.href = "https://wa.me/2349135403118"
              }} type="button" className="btn btn--rounded btn--border">{status === 0 ? "Pending" : "Approved"}</a>
          </div>

          <div className="checkout-content">
            <div className="checkout__col-8">
              

              <div className="block">
                <h3 className="block__title">Please fill the information below</h3>
                <form className="form">
                  <div className="form__input-row form__input-row--one">
                    <div className="form__col">
                      <input value={email} className="form__input form__input--lg" type="email" placeholder="Email" disabled />
                    </div>
                  </div>
                  
                  <div className="form__input-row form__input-row--one">
                    <div className="form__col">
                      <input value={firstname + " " + lastname} className="form__input form__input--sm" type="text" placeholder="Full name" disabled />
                    </div>
                  </div>
                  
                  <div className="form__input-row form__input-row--one">
                    <div className="form__col">
                      
                        <input onChange={(e) => {
                            setRemita(e.target.value)
                          }} id="remita" value={remita} className="form__input form__input--sm" type="text" placeholder="Remita ID" required />
                          
                    </div>
                    <br />
                    <div className="form__col">
                       
                                <input onChange={(e) => {
                                setIncome(e.target.value)
                            }} id="income" value={income} className="form__input form__input--sm" type="number" min="80000" placeholder="Monthly Income in NGN" required />
                            
                    </div>
                  </div>

                  <div className="form__input-row form__input-row--two">
                    <div className="form__col">
                        
                            <input onChange={(e) => {
                                setNum(e.target.value)
                              }} id="num" value={num} className="form__input form__input--sm" type="number" placeholder="Number of Family" required />
                              
                      
                    </div>

                    <div className="form__col">
                      <div className="select-wrapper select-form">
                       
                            <select onChange={(e) => {
                                setGender(e.target.value)
                              }} id="gender">
                                  <option>{gender ? gender : "Select Gender"}</option>
                                  <option value="Male">Male</option>
                                  <option value="Female">Female</option>
                                </select>
                                
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            
            
            
            <div className="checkout__col-2">
              
            </div>
          </div>
          
          <div className="cart-actions cart-actions--checkout">
            <a href="/" className="cart__btn-back"><i className="icon-left"></i> Back</a>
            <div className="cart-actions__items-wrapper">
              <button type="submit" className="btn btn--rounded btn--yellow">Submit</button>
              <a onClick={() => {
                window.location.href = "https://wa.me/2349135403118"
              }} type="button" className="btn btn--rounded btn--border">Need Help?</a>
            </div>
          </div>
        </div>
      </section>
      </form>
    </Layout>
  )
};

  
export default KYC