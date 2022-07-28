import { useSelector } from 'react-redux';
import CheckoutStatus from '../../components/checkout-status';
import Item from './item';
import { RootState } from 'store';
import { useState, useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
const ShoppingCart = () => {
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

    fetch(`https://orangli.com/server/api/Products/getCart.php?userid=${userid}`, {
    headers: {
        "Authorization": `Bearer ${token}`
    }
    })
    .then(response => response.json())
    .then((res) => {
    console.log(res);
    if(res.code == 200){
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
    <section className="cart">
      <ToastContainer
          
          />
      <div className="container">
        <div className="cart__intro">
          <h3 className="cart__title">Shopping Cart</h3>
          <CheckoutStatus step="cart" />
        </div>

        <div className="cart-list">
          {cartItems.length > 0 &&
            <table>
              <tbody>
                <tr>
                  <th style={{textAlign: 'left'}}>Product</th>
                  {/* <th>Color</th>
                  <th>Size</th> */}
                  <th>Qty</th>
                  <th>Price</th>
                  <th></th>
                </tr>

                {cartItems.map(item => (
                  <Item 
                    key={item.cart_info.id}
                    id={item.cart_info.id}
                    thumb={item.product.image}
                    name={item.product.product_name}
                    color={item.color}
                    price={item.cart_info.price}
                    size={item.size}
                    count={item.cart_info.qty}
                  />
                ))}
              </tbody>
            </table> 
          } 
          
          {cartItems.length === 0 && 
            <p>Nothing in the cart</p>
          }
        </div>
      
        <div className="cart-actions">
          <a href="/products" className="cart__btn-back"><i className="icon-left"></i> Continue Shopping</a>
         

          <div className="cart-actions__items-wrapper">
            <p className="cart-actions__total">Total cost <strong>NGN{priceTotal}</strong></p>
            <a href="#checkout" onClick={() => {
              var userid = localStorage.getItem("userid");
              var token = localStorage.getItem("token");
              fetch(`https://orangli.com/server/api/User/submitOrder.php?userid=${userid}`, {
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
                setTimeout(() => {
                  window.location.href = "/profile"
                }, 1000)
                }else if(res.code == 401){
                  toast.error("An error occured, please login again", {
                    position: toast.POSITION.TOP_RIGHT
                  });
                  setTimeout(() => {
                    window.location.href = "/login"
                  }, 2000)
                }
              })
            }} className="btn btn--rounded btn--yellow">Submit Order - Pay Later</a>
            <a href="/cart/checkout" onClick={() => {

            }} className="btn btn--rounded btn--yellow">Pay Now</a>
          </div>
        </div>
      </div>
    </section>
  )
};

  
export default ShoppingCart