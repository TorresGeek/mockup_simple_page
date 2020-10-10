import React, { Fragment } from 'react';
import Header from '../../Common/Header/Header';
import MainCarousel from '../MainCarousel/MainCarousel';
import Footer from '../../Common/Footer/Footer';
import SubBanners from '../SubBanners/SubBanners';
import Brands from '../Brands/Brands';

export default function HomeBase() {
    return(
        <Fragment>
            <Header/>
            <MainCarousel/>
            <SubBanners/>
            <Brands/>
            <Footer></Footer>
        </Fragment>
    )
}
