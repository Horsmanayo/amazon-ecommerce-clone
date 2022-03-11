import React from "react";
import "./header.css";
import { BsSearch } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useStateValue } from "../../StateProvider";

function Header() {


  const [ {basket}, dispatch ] = useStateValue()

  return (
    <div className="header">
      <Link to="/">
        <img
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazon"
          className="header__logo"
        />
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <BsSearch className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOne">Hello Guest</span>
          <span className="header__optionLineTwo">Sign In</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
      </div>

      <Link to="/checkout">
        <div className="header__optionBasket">
          <FiShoppingCart className="" />
          <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
        </div>
      </Link>
    </div>
  );
}

export default Header;
