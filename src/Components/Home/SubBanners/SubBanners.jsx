import React from 'react';
import './SubBanners.scss';

import Banner0 from '../../../Assets/SubBanners/SubBanner0.jpg';
import Banner1 from '../../../Assets/SubBanners/SubBanner1.jpg';
import Banner2 from '../../../Assets/SubBanners/SubBanner2.jpg';
import Banner3 from '../../../Assets/SubBanners/SubBanner3.jpg';
import Banner4 from '../../../Assets/SubBanners/SubBanner4.jpg';

export default function SubBanners() { 
    return(
        <div className="SubBannersMasterContainer">
            <div className="SubBannerItem SubBannerItem0">
                <img src={Banner0} alt=""/>
                <div className="Colorwhite"></div>
                <div className="SubBannerControllers">

                </div>
            </div>

            <div className="SubBannerItem SubBannerItem1">
                <img src={Banner1} alt=""/>
                <div className="Colorwhite"></div>
                <div className="SubBannerControllers">
                    
                </div>
            </div>

            <div className="SubBannerItem SubBannerItem2">
                <img src={Banner2} alt=""/>
                <div className="Colorwhite"></div>
                <div className="SubBannerControllers">
                    
                </div>
            </div>


            <div className="SubBannerItem SubBannerItem3">
                <img src={Banner4} alt=""/>
                <div className="Colorwhite"></div>
                <div className="SubBannerControllers">
                    
                </div>
            </div>

            <div className="SubBannerItem SubBannerItem4">
                <img src={Banner3} alt=""/>
                <div className="Colorwhite"></div>
                <div className="SubBannerControllers">
                    
                </div>
            </div>
        </div>
    )
}
