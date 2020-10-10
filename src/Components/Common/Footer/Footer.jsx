import React from 'react';
import './Footer.scss';

import Favorites from '../../../Assets/MaterialDesign/Favorites.svg';
import LocalShipping from '../../../Assets/MaterialDesign/LocalShipping_Car.svg';
import PersonOutline from '../../../Assets/MaterialDesign/PersonOutline.svg';
import ShoppingBag from '../../../Assets/MaterialDesign/ShoppingBag.svg';
import DownArrow from '../../../Assets/MaterialDesign/DownArrow.svg';
import Search from '../../../Assets/MaterialDesign/Search.svg';

import LocationIcon from '../../../Assets/MaterialDesign/locationIcon.svg';
import PhoneIcon from '../../../Assets/MaterialDesign/PhoneIcon.svg';
import EmailIcon from '../../../Assets/MaterialDesign/EmailIcon.svg';

import TwitterIcon from '../../../Assets/SocialMediaIcons/twitter.svg';
import LinkedinIcon from '../../../Assets/SocialMediaIcons/linkedin.svg';
import FacebookIcon from '../../../Assets/SocialMediaIcons/facebook.svg';
import SkypeIcon from '../../../Assets/SocialMediaIcons/skype.svg';
import PinterestIcon from '../../../Assets/SocialMediaIcons/pinterest.svg';
import SendIcon from '../../../Assets/MaterialDesign/SendIcon.svg';

export default function Footer() {
    return (
        <div className="FooterMasterContainer">
            <div className="GrayHeader">
                <div className="GrayHeaderSubcontainer">

                    <div className="LogoAndName">
                        <img src={ShoppingBag} alt="" />
                        <span>Company</span>
                    </div>

                    <div className="CompanyAndInformation">
                        <div className="CompanyDescription">
                            <span>Great Range Of Laptops For Your Everyday Essential w/Intel ® Core ™. Same Day Shipment - Cash On Delivery - EMI Options India's No.1 Most Trusted Technology Brand in 2015</span>
                        </div>

                        <div className="CompanyDetails">
                            <div className="Item">
                                <img src={LocationIcon} alt="LocationIcon" />
                                <span>321, Ramis Gandour Colony, District 9 Florida</span>
                            </div>
                            <div className="Item">
                                <img src={PhoneIcon} alt="PhoneIcon" />
                                <span>090-0965-2987</span>
                            </div>
                            <div className="Item">
                                <img src={EmailIcon} alt="EmailIcon" />
                                <span>contact@company.com</span>
                            </div>
                        </div>
                    </div>

                    <div className="CategoryTitle CategoryTitle0">
                        <span >COLLECTIONS</span>
                        <div className="Separator"></div>
                    </div>
                    <div className="CategoryDiv CategoryDiv0">
                        <span className="CategoryItem">Summer 2017</span>
                        <span className="CategoryItem">Women's Dress</span>
                        <span className="CategoryItem">Women's Jackets</span>
                        <span className="CategoryItem">Men's Sweats Shirts</span>
                        <span className="CategoryItem">Men's Dress</span>
                        <span className="CategoryItem">Accessories</span>
                        <span className="CategoryItem">Travel Bags</span>
                    </div>

                    <div className="CategoryTitle CategoryTitle1">
                        <span >COLLECTIONS</span>
                        <div className="Separator"></div>
                    </div>
                    <div className="CategoryDiv CategoryDiv1">
                        <span className="CategoryItem">Order Tracking</span>
                        <span className="CategoryItem">The privacy Policy</span>
                        <span className="CategoryItem">Payments & Returns</span>
                        <span className="CategoryItem">Product Care</span>
                        <span className="CategoryItem">FAQ's</span>
                        <span className="CategoryItem">Shipping Information</span>
                        <span className="CategoryItem">Accounts Setting</span>
                    </div>

                    <div className="CategoryTitle CategoryTitle2">
                        <span >SUBSCRIBE FOR MORE UPDATES</span>
                        <div className="Separator"></div>
                    </div>
                    <div className="SendEmailAndSocialMedia CategoryDiv2">
                        <span className="CategoryItem">
                            Sign up for Newsletter to Get all the information on Events. Offers. Sales and More.
                        </span>

                        <div className="SearchDiv">
                            <input placeholder="Email address" className="TextInput" type="text" />
                            <div className="Button">
                                <img src={SendIcon} alt="Search" />
                            </div>
                        </div>

                        <span className="WeNeverShareSpan"> We never share your mail at anywhere</span>

                        <div className="SocialMediaIcons">
                            <img src={TwitterIcon} alt="Twitter"/>
                            <img src={LinkedinIcon} alt="LinkedinIcon"/>
                            <img src={FacebookIcon} alt="FacebookIcon"/>
                            <img src={SkypeIcon} alt="SkypeIcon"/>
                            <img src={PinterestIcon} alt="PinterestIcon"/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="BlackHeader">
                <div className="BlackHeaderSubcontainer">
                    <span>Copyrights © 2020. Company All Rights Reserved</span>
                </div>
            </div>
        </div>
    )
}
