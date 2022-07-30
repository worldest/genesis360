import Layout from '../layouts/Main';
import { useSelector } from 'react-redux';
import CheckoutStatus from '../components/checkout-status';
import CheckoutItems from '../components/checkout/items';
import { RootState } from 'store';
import { useEffect, useState, useCallback } from 'react';
import { usePaystackPayment } from 'react-paystack';
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
    const [spouseName, setSpouseName] = useState("");
    const [bvn, setBvn] = useState("");
    const [scriptLoaded, setScriptLoaded] = useState(false);
    const [dob, setDOB] = useState("");
    const [base64String, setBase64String] = useState("");
    const [userID, setUserID] = useState("");
    const [marital, setMarital] = useState("");
    const [proof, setProof] = useState("");
    const [street, setStreet] = useState("");
    const [userToken, setUserToken] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [disabled_, setDisabled] = useState(false);
    const [status, setStatus] = useState(null);
    const config = {
      reference: (new Date()).getTime().toString(),
      email: email,
      amount: 42000,
      publicKey: 'pk_test_4d1023fb0121454c0cf7f3720fc71d1a4503e4f3',
    };
    function imageUploaded() {
      var getFile = document.getElementById("uploadFile");
      var file = getFile['files'][0];
    
      var reader = new FileReader();
      console.log("next");
        
      reader.onload = function () {
          var dataResul = reader.result;
          var dataResu = dataResul.toString();
          var dataResult = dataResu.replace("data:", "")
          .replace(/^.+,/, "");
          setBase64String(dataResult);
          console.log(dataResult)
          var imageBase64Stringsep = base64String;
    
          // alert(imageBase64Stringsep);
          console.log(base64String);
          var data = new FormData();
          data.append("file", base64String);
          data.append("userid", userID);
          fetch(`https://orangli.com/server/api/User/setProof.php`, {
            headers: {
                "Authorization": `Bearer ${userToken}`
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
      }
      reader.readAsDataURL(file);
  }
    
  function displayString() {
      console.log("Base64String about to be printed");
      alert(base64String);
  }
    const onSuccess = (reference) => {
      // Implementation for whatever you want to do with reference and after success call.
      console.log(reference);
      var userid = localStorage.getItem("userid");
      var token = localStorage.getItem("token");
      var data = new FormData();
      data.append("num", num)
      data.append("income", income)
      data.append("gender", gender)
      data.append("remita", remita)
      data.append("userid", `${userid}`)
      data.append("proof", proof);
      data.append("marital", marital);
      data.append("street", street);
      data.append("city", city);
      data.append("state", state);
      data.append("proof", proof);
      data.append("dob", dob);
      data.append("spouse", spouseName)
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
              alert("You will now be redirected to provide your financial details for further analysis");
              openWidget()
          }else if(res.code == 401){
              toast.error("An error occured, please login again", {
              position: toast.POSITION.TOP_RIGHT
              });
              setTimeout(() => {
              window.location.href = "/login"
              }, 2000)
          }
          })
    };
  
    // you can call this function anything
    const onClose = () => {
      // implementation for  whatever you want to do when the Paystack dialog closed.
      console.log('closed')
    }
  
    const PaystackHookExample = () => {
        const initializePayment = usePaystackPayment(config);
        return (
          <div>
              <button className="btn btn--rounded btn--yellow" onClick={() => {
                  initializePayment(onSuccess, onClose)
              }}>Submit KYC</button>
          </div>
        );
    };
    useEffect(() => {
        var userid = localStorage.getItem("userid");
        var token = localStorage.getItem("token");
        setUserToken(token);
        setUserID(userid);
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
    const openWidget = useCallback(async () => {
      const Service = (await import("@hadada.co/serve.js")).default;
      
      const hadadaInstance = new Service({
        key: "09f-70c9f238b97f",
        onClose: () => console.log("Widget closed"),
        onLoad: () => setScriptLoaded(true),
        onSuccess: ({ code }) => console.log(`successfully: ${code}`),
      });
  
      hadadaInstance.setup();
      hadadaInstance.open();
    }, []);
  return (
    <Layout>
        <ToastContainer
          
         />
        <div className='row'>
          <div className='col-md-8'>

          </div>
          <div className='col-md-4'>
          <form method="POST" onSubmit={(e) => {
            e.preventDefault();
            
          }}>
      <section className="cart">
        <div className="container">
          <div className="cart__intro">
            <h3 className="cart__title">Complete KYC</h3>
            <a onClick={() => {
                // window.location.href = "https://wa.me/2349135403118"
              }} type="button" className="btn btn--rounded btn--border">{status == 0 ? "Pending" : "Approved"}</a>
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
                  <br/>
                  <div className="form__input-row form__input-row--one">
                    <div className="form__col">
                      <input onChange={(e) => {
                        setSpouseName(e.target.value)
                      }} className="form__input form__input--sm" type="text" placeholder="Father's/Spouse's Name" required/>
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
                                  <option>--Select gender--</option>
                                  <option value="Male">Male</option>
                                  <option value="Female">Female</option>
                                </select>
                                
                      </div>
                    </div>
                  </div>
                  <br/>
                  <div className="form__input-row form__input-row--two">
                    <div className="form__col">
                              <span>Date of Birth</span>
                            <input onChange={(e) => {
                                setDOB(e.target.value)
                              }} id="num" className="form__input form__input--sm" type="date" placeholder="Date Of Birth" required />
                              
                      
                    </div>

                    <div className="form__col">
                      <div className="select-wrapper select-form">
                       
                            <select onChange={(e) => {
                                setMarital(e.target.value)
                              }} id="gender">
                                  <option><p> Marital Status</p></option>
                                  <option value="Male">Single</option>
                                  <option value="Female">Female</option>
                                </select>
                                
                      </div>
                    </div>
                  </div>
                  <br/>
                  <div className="form__col">
                    <h4>Proof Of Address To Be Provided By Applicant</h4>

                      <div className="select-wrapper select-form"> 
                            <select style={{marginTop: 20, height: 40}} onChange={(e) => {
                                setProof(e.target.value)
                              }} id="gender">
                                  <option><p>Select Option</p></option>
                                  <option value="Passport">Passport</option>
                                  <option value="RationCard">Ration Card</option>
                                  <option value="DrivingLicense">Driving License</option>
                                  <option value="VoterIdentityCard">Voter Identity Card </option>
                                  <option value=">RegisteredLease/SaleAgreementOfResidense">Registered Lease/Sale Agreement Of Residense</option>
                                  <option value="LatestBankAccountStatement">Latest Bank Account Statement</option>
                                  <option value="LatestTelephoneBil">Latest Telephone Bill</option>
                                  <option value="LatestElectricityBill">Latest Electricity Bill</option>
                                  <option value="LatestGasBill">Latest Gas Bill</option>
                                  <option value="Other">Other</option>

                                </select>
                                
                      </div>
                    </div>
                    <br/>
                   <div ><h4>File Upload</h4>
                   <br/>
                   <p>Please upload related photographs and documents</p>
                   <br/>
                   <div className="form__col">
                        
                        <input onChange={(e) => {
                            return imageUploaded();
                          }} id="uploadFile" className="form__input form__input--sm" type="file" accept='image/*' placeholder="" required />
                          
                  
                  </div>
                </div>
                    <br/>
                  <div> <h4>Permanent Address Of Resident Applicant</h4>
                  <br/>
                    <div className="form__input-row form__input-row--one">
                      <div className="form__col">
                        <input  onChange={(e) => {
                        setStreet(e.target.value)
                      }} className="form__input form__input--lg" type="text" placeholder="Street Address" required />
                      </div>
                    </div>
                    <br/>
                    <div className="form__input-row form__input-row--two">
                    <div className="form__col">
                        
                            <input onChange={(e) => {
                                setCity(e.target.value)
                              }} id="city" className="form__input form__input--sm" type="text" placeholder="City" required />
                              
                      
                    </div>
                    <div className="form__col">
                        
                        <input onChange={(e) => {
                            setState(e.target.value)
                          }}  className="form__input form__input--sm" type="text" placeholder="State/Province" required />
                          
                  
                </div>
                    </div>
                   </div>
                   
                <br/>
                <div>
                  <h4>Declaration</h4>
                  <br/>
                  <p>I hereby declear that the information provided in this form is accurate and complete. I 
                     comfirm that any informationis found incorrect and/or incomplete that leads a violation of 
                     regulations may initiate legal actions, and i accept that i am the responsible party for any and
                     all charges, penalties and violations.
                   </p>
                   <br/>
                   <input  type="checkbox" placeholder="" required />

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
              <PaystackHookExample />
              <a onClick={() => {
                window.location.href = "https://wa.me/2349135403118"
              }} type="button" className="btn btn--rounded btn--border">Need Help?</a>
            </div>
          </div>
        </div>
      </section>
        </form>
          </div>
        </div>
        
    </Layout>
  )
};

  
export default KYC