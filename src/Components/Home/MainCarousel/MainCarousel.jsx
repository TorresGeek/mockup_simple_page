import React from 'react';
import BannerMain from '../../../Assets/Banner/BannerMain.jpg';
import './MainCarousel.scss';

import LeftArrow from '../../../Assets/MaterialDesign/arrow_back_ios-24px.svg';
import RightArrow from '../../../Assets/MaterialDesign/arrow_forward_ios-24px.svg';

import FilledDot from '../../../Assets/MaterialDesign/FilledDot.svg'
import OutlineDot from '../../../Assets/MaterialDesign/OutlineDot.svg';
import { useState } from 'react';

export default function MainCarousel() {

    const [CarouselIndex, SetCarouselIndex] = useState(0);
    const [CarouselImages, SetCarouselImages] = useState([BannerMain, BannerMain, BannerMain, BannerMain]);
    const RenderDots = () => {
        let Dots = [];

        for (let i = 0; i < 4; i++) {
            Dots.push(
                <img onClick={() => {SetCarouselIndex(i)}} key={i} src={(CarouselIndex == i) ? OutlineDot : FilledDot}></img>
            )
        }

        return Dots;
    }
    const RenderCarouselItem = () => {
        let CarouselItem = [];

        for (let i = 0; i < 4; i++) {
            CarouselItem.push(
                <div key={i} className={(CarouselIndex == i) ? "CarouselItem CarouselItemCenter" : ((CarouselIndex > i) ? "CarouselItem CarouselItemLeft" : "CarouselItem CarouselItemRight")} >
                    <img src={BannerMain} alt="" />
                    <div className="Controllers">


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
            )
        }

        return CarouselItem;
    }

    const ChangeIndexCarousel = (index) => {
        if (CarouselIndex + index >= 3) {
            SetCarouselIndex(3);
            console.log({ kroulse: 3 });
        } else if (CarouselIndex + index <= 0) {
            SetCarouselIndex(0);
            console.log({ kroulse: 0 });
        } else {
            SetCarouselIndex(CarouselIndex => (CarouselIndex + index));
            console.log({ kroulse: CarouselIndex + index });
        }

    }

    return (
        <div className="MainCarouselMasterContainer">

            {
                RenderCarouselItem()
            }

            <div className="Dots">
                {
                    RenderDots()
                }
            </div>

            <div onClick={() => ChangeIndexCarousel(-1)} className="ArrowContainer ArrowContainerLeft">
                <img src={RightArrow} alt="LeftArrow" />
            </div>

            <div onClick={() => ChangeIndexCarousel(1)} className="ArrowContainer ArrowContainerRight">
                <img src={RightArrow} alt="RightArrow" />
            </div>

        </div>
    )
}