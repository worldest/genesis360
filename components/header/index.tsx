import { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import useOnClickOutside from 'use-onclickoutside';
import Logo from '../../assets/icons/logo';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { RootState } from 'store';

import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
type HeaderType = {
  isErrorPage?: Boolean;
}

const Header = ({ isErrorPage }: HeaderType) => {
    const [firstname, setFirstname] = useState("");
  const router = useRouter();
  const { cartItems } = useSelector((state: RootState)  => state.cart);
  const arrayPaths = ['/'];  
  const [token, setToken] = useState(null);
  const [onTop, setOnTop] = useState(( !arrayPaths.includes(router.pathname) || isErrorPage ) ? false : true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const navRef = useRef(null);
  const searchRef = useRef(null);

  const headerClass = () => {
    if(window.pageYOffset === 0) {
      setOnTop(true);
    } else {
      setOnTop(false);
    }
  }

  useEffect(() => {
    if(!arrayPaths.includes(router.pathname) || isErrorPage) {
      return;
    }

    headerClass();
    window.onscroll = function() {
      headerClass();
    };

 
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
            setToken(token)
            setFirstname(res.user.first_name);
          }else if(res.code == 401){
            toast.error("An error occured, please login again", {
              position: toast.POSITION.TOP_RIGHT
            });
            setTimeout(() => {
              // window.location.href = "/login"
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
          }else if(res.code == 401){
            toast.error("An error occured, please login again", {
              position: toast.POSITION.TOP_RIGHT
            });
            setTimeout(() => {
              // window.location.href = "/login"
            }, 2000)
          }
        })
    }, [])
  const closeMenu = () => {
    setMenuOpen(false);
  }

  const closeSearch = () => {
    setSearchOpen(false);
  }

  // on click outside
  useOnClickOutside(navRef, closeMenu);
  useOnClickOutside(searchRef, closeSearch);

  return(
    <header className={`site-header ${!onTop ? 'site-header--fixed' : ''}`}>
      <div className="container">
        <Link href="/">
          <img src="/images/logos/logo.png" width="120px" height="120px" />
        </Link>
        <nav ref={navRef} className={`site-nav ${menuOpen ? 'site-nav--open' : ''}`}>
          <Link href="/products">
            <a>Products</a>
          </Link>
          <a href="#">About us</a>
          <a href="#">Contact Us</a>
          <button className="site-nav__btn"><p>Account</p></button>
        </nav>

        <div className="site-header__actions">
          <button ref={searchRef} className={`search-form-wrapper ${searchOpen ? 'search-form--active' : ''}`}>
            <form className={`search-form`}>
              <i className="icon-cancel" onClick={() => setSearchOpen(!searchOpen)}></i>
              <input type="text" name="search" placeholder="Enter the product you are looking for" />
            </form>  
            <i onClick={() => setSearchOpen(!searchOpen)}  className="icon-search"></i>
          </button>
          <Link href="/cart">
            <button className="btn-cart">
              <i className="icon-cart"></i>
              {cartItems.length > 0 && 
                <span className="btn-cart__count">{cartItems.length}</span>
              }
            </button>
          </Link>
          <Link href="/profile">
            <button className="site-header__btn-avatar"><i className="icon-avatar"></i> {firstname}</button>
          </Link>
          
          <button 
            onClick={() => setMenuOpen(true)} 
            className="site-header__btn-menu">
            <i className="btn-hamburger"><span></span></i>
          </button>
        </div>
      </div>
    </header>
  )
};


export default Header;
