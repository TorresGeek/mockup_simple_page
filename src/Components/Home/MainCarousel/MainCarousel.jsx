import React from 'react';
import BannerMain from '../../../Assets/Banner/BannerMain.jpg';
import './MainCarousel.scss';

import LeftArrow from '../../../Assets/MaterialDesign/arrow_back_ios-24px.svg';
import RightArrow from '../../../Assets/MaterialDesign/arrow_forward_ios-24px.svg';

export default function MainCarousel() {
    return (
        <div className="MainCarouselMasterContainer">
            <div className="CarouselItem">
                <img src={BannerMain} alt="" />
                <div className="Controllers">
                    <div className="ArrowContainer ArrowContainerLeft">
                        <img src={RightArrow} alt="LeftArrow" />
                    </div>

                    <div className="ArrowContainer ArrowContainerRight">
                        <img src={RightArrow} alt="RightArrow" />
                    </div>

                    <div className="TextAndButtons">
                        <span className="HeaderTitle">TULIPS</span>
                        <span className="SaleText">SALE</span>
                        <div className="SubSaleText">
                            <span className="BigSpan">50%</span>
                            <span className="BigSpan">OFF</span>
                            <span className="SmallSpan">SHOP NOW</span>
                        </div>

                        <div className="ButtonsContainer">
                            <div className="BaseButton ButtonShop">
                                <span>SHOP NOW</span>
                            </div>
                            <div className="BaseButton ButtonFrom">
                                <span>FROM $15</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}