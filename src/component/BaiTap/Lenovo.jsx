import React, { Component } from 'react';

class Lenovo extends Component {
    render() {
        return (
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
                <div className="container">
                    <div className="card " style={{ width: 300 }}>
                        <img className="card-img-top" src="./img/lt_lenovo.png" alt="Card image" style={{ maxWidth: '100%', height: 250 }} />
                        <div className="card-body text-center">
                            <h4 className="card-title text-center">LENOVO THINKPAD</h4>
                            <p className="card-text">The ThinkPad X1 Carbon is a high-end notebook computer released by Lenovo in 2012</p>
                            <a href="#" className="btn btn-primary mr-1">Detail</a>
                            <a href="#" className="btn btn-danger">Cart</a>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Lenovo;