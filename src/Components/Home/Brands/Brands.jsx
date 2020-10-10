import React from 'react';
import './Brands.scss';

import RightArrow from '../../../Assets/MaterialDesign/arrow_forward_ios-24px.svg';

import Brand0 from '../../../Assets/Brands/Brand0.jpg';
import Brand1 from '../../../Assets/Brands/Brand1.jpg';
import Brand2 from '../../../Assets/Brands/Brand2.jpg';
import Brand3 from '../../../Assets/Brands/Brand3.jpg';
import { useState } from 'react';

export default function Brands() {
    const [BrandIndex, SetBrandIndex] = useState(0);
    const [NumberOfGroups, SetNumberOfGroups] = useState(4);

    const ChangeBrandIndex = (Amount) => {
        if(BrandIndex+Amount > 3) {
            SetBrandIndex(3);
            return;
        }
        
        if(BrandIndex+Amount < 0){
            SetBrandIndex(0);
            return;
        }

        SetBrandIndex(BrandIndex => BrandIndex+Amount);
    }

    const RenderBrandGroups = () => {
        let BrandGroups = [];

        const GetClassName = (i) => {
            if(BrandIndex == i){
                return "BrandGroupCenter";
            }

            if(BrandIndex > i){
                return "BrandGroupLeft";
            }else{
                return "BrandGroupRight";
            }
        }

        for (let i = 0; i < NumberOfGroups; i++) {
            BrandGroups.push(
            <div className={"BrandGroup " + GetClassName(i)}>
                <img src={Brand0} />
                <img src={Brand1} />
                <img src={Brand2} />
                <img className="CustoHeight" src={Brand3} />
            </div>)
        }

        return BrandGroups;
    }


    return (
        <div className="BrandsMasterContainer">
            <div className="BrandsSubContainer">
                <div className="BrandsHeader">
                    <span>BRANDS</span>
                    <div className="ArrowsContainer">
                        <div onClick={() => {ChangeBrandIndex(-1)}} className={(BrandIndex == 0) ? "ArrowContainer FlipArrow Disabled" : "ArrowContainer FlipArrow"}>
                            <img src={RightArrow} />
                        </div>
                        <div onClick={() => {ChangeBrandIndex(1)}} className={(BrandIndex == NumberOfGroups-1) ? "ArrowContainer Disabled" : "ArrowContainer"}>
                            <img src={RightArrow} />
                        </div>
                    </div>
                </div>
                <div className="BrandImages">
                    {RenderBrandGroups()}
                </div>
            </div>
        </div>
    )
}
