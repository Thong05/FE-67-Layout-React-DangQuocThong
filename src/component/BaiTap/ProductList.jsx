import React, { Component } from 'react';
import Product from './Product'
import ProductGalaxyNote7 from './ProductGalaxyNote7'
import ProductVivo from './ProductVivo'
import ProductBlue from './ProductBlue'


class ProductList extends Component {
    render() {
        return (
            <div className="bg-dark text-while">
                <h1 className="text-center text-white pt-4  ">BEST SMARTPHONE</h1>
                <div className="row ">
                    <Product/>
                    <ProductGalaxyNote7/>
                    <ProductVivo/>
                    <ProductBlue/>
                </div>
                
            </div>
        );
    }
}

export default ProductList;