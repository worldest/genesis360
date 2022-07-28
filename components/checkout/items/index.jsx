import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
const CheckoutItems = () => {
  const [cartItems, setCartItems] = useState([]);
  const [priceTotal, setPriceTotal] = useState(0);
  useEffect(() => {
    toast.info("Fetching your cart", {
      position: toast.POSITION.TOP_RIGHT
    });
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
        
      }else if(res.code == 401){
        toast.error("An error occured, please login again", {
          position: toast.POSITION.TOP_RIGHT
        });
        setTimeout(() => {
          window.location.href = "/login"
        }, 2000)
      }
    })

    fetch(`https://orangli.com/server/api/Products/getOrders.php?userid=${userid}`, {
    headers: {
        "Authorization": `Bearer ${token}`
    }
    })
    .then(response => response.json())
    .then((res) => {
    console.log(res);
    if(res.code == 200){
        console.log("Orders");
        console.log(res)
        setCartItems(res.cart)
        setPriceTotal(res.total)
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
    <ul className="checkout-items">
      <ToastContainer
          
          />
      {cartItems.map(item => (
        <li className="checkout-item">
          <div className="checkout-item__content">
            <div className="checkout-item__img">
              {/*<img src={item.product.image} />*/}
            </div>

            <div className="checkout-item__data">
              {/* <h3>{item.product.product_name}</h3> */}
              {/* <span>#{item.cart_info.id}</span> */}
              {/* <span>&nbsp;&nbsp;&nbsp;{item.cart_info.status === 1 ? "Completed" : "Pending"}</span> */}
            </div>
          </div>
          <h3>NGN {item.cart_info.price}</h3><br />
          
        </li>
      ))}
    </ul>
  )
};

  
export default CheckoutItems