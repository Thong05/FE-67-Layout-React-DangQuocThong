import React, { Component } from 'react';
import Header from './Header'
import Slider from './Slider'
import ProductList from './ProductList'
import Footer from './Footer'
import LaptopList from './LaptopList';

class BaiTapComponent extends Component {
    render() {
        return (
            <div>
                <Header />
                <Slider />
                <ProductList />
                <LaptopList/>
                <Footer />
            </div>
        );
    }
}

export default BaiTapComponent;