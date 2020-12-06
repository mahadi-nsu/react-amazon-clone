import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import "./Header.css";

function Header() {
  return (
    <div>
      <nav className="header">
        {/* logo on the left */}
        <Link to="/">
          <img className="header__logo" src={logo} alt="mahadi" />
        </Link>
        {/* Search box */}
        <div className="header__search">
          <input type="text" className="header__searchInput" />
          <SearchIcon className="header__searchIcon" />
        </div>

        
        {/* 3 links */}

        <div className = "header__nav">
        {/* first link */} 
        <Link to = "/login" className = "header__link">
          <div className = "header__option">
            <span className = "header__optionLineOne">Hello Mahadi</span>
            <span className = "header__optionLineTwo">Sign In</span>
          </div>
        </Link>
        {/* second link */}
        <Link to = "/login" className = "header__link">
          <div className = "header__option">
            <span className = "header__optionLineOne">Returns</span>
            <span className = "header__optionLineTwo">& Order</span>
          </div>
        </Link>
        {/* third link */}
        <Link to = "/login" className = "header__link">
          <div className = "header__option">
            <span className = "header__optionLineOne">Your</span>
            <span className = "header__optionLineTwo">Prime</span>
          </div>
        </Link>

        <Link to = "/checkout" className = "header__link">
          <div className = "header__optionBasket">
            <ShoppingBasketIcon></ShoppingBasketIcon>
             <span className = "header__optionLineTwo header__basketCount"> 0</span>
          </div>
        </Link>
        </div>

      </nav>
    </div>
  );
}

export default Header;
