import React, { Fragment } from 'react';
import Header from '../../Common/Header/Header';
import MainCarousel from '../MainCarousel/MainCarousel';

export default function HomeBase() {
    return(
        <Fragment>
            <Header></Header>
            <MainCarousel></MainCarousel>
        </Fragment>
    )
}
