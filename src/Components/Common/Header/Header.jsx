import React from 'react';
import './Header.scss';

import Favorites from '../../../Assets/MaterialDesign/Favorites.svg';
import LocalShipping from '../../../Assets/MaterialDesign/LocalShipping_Car.svg';
import PersonOutline from '../../../Assets/MaterialDesign/PersonOutline.svg';
import ShoppingBag from '../../../Assets/MaterialDesign/ShoppingBag.svg';
import DownArrow from '../../../Assets/MaterialDesign/DownArrow.svg';
import Search from '../../../Assets/MaterialDesign/Search.svg';

export default function Header() {
    return (
        <div className="HeaderMasterContainer">
            <div className="BlackHeader">
                <div className="BlackHeaderSubcontainer">

                    <div className="LeftElements">
                        <img src={LocalShipping} className="LocalShipping" />
                        <span>Free shipping on Order adove $199</span>
                    </div>

                    <div className="RightElements">
                        <div className="AccountDiv">
                            <img src={PersonOutline} alt="PersonOutline" />
                            <span>My Account</span>
                        </div>
                        <div className="LoginDiv">
                            <span className="Clickeable">Login</span>
                            <span>/</span>
                            <span className="Clickeable">Register</span>
                        </div>
                    </div>

                </div>
            </div>

            <div className="GrayHeader">
                <div className="GrayHeaderSubcontainer">
                    <div className="CompanyNameDiv">
                        <img src={ShoppingBag} alt="" />
                        <span>Company</span>
                    </div>

                    <div className="SearchDiv">
                        <input placeholder="Search from entire store..." className="TextInput" type="text" />
                        <select className="SelectInput" name="Categories">
                            <option value="AllCategories">All Categories</option>
                            <option value="Minecraft">Minecraft</option>
                            <option value="Terraria">Terraria</option>
                            <option value="DarkSouls">Dark Souls</option>
                        </select>
                        <div className="Button">
                            <img src={Search} alt="Search" />
                        </div>
                    </div>

                    <div className="WishlistDiv">
                        <img src={Favorites} alt="Favorites" />
                        <span>WishList</span>
                        <img src={DownArrow} alt="DownArrow" />
                    </div>

                    <img className="ShoppingBag" src={ShoppingBag} alt="" />
                </div>
            </div>

            <div className="WhiteHeader">
                <div className="WhiteHeaderSubcontainer">
                    <div className="RouterOptions">
                        <span>Home</span>
                        <span>Shop</span>
                        <span>New Arrivals</span>
                        <span>Products</span>
                        <span>Brand</span>
                        <span>Blog</span>
                        <span>Contact</span>
                    </div>

                    <div className="BagAndItems">
                        <img className="ShoppingBag" src={ShoppingBag} alt=""/>
                        <div className="Text">
                            <span>Cart items: (3)</span>
                            <span>Total: $345</span>
                        </div>
                        <img className="DownArrow" src={DownArrow} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}
