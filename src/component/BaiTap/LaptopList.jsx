import React, { Component } from 'react';
import Macbook from './Macbook';
import Asus from './Asus';
import Hp from './Hp';
import Lenovo from './Lenovo';

class LaptopList extends Component {
    render() {
        return (
            <div>
                <h1 className="pt-5">Best Laptop</h1>
                <div className="row pb-5">
                    <Macbook/>
                    <Asus/>
                    <Hp/>
                    <Lenovo/>
                </div>
            </div>
        );
    }
}

export default LaptopList;