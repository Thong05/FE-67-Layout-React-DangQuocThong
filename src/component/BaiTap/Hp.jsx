import React, { Component } from 'react';

class Hp extends Component {
    render() {
        return (
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
                <div className="container">
                    <div className="card" style={{ width: 300 }}>
                        <img className="card-img-top" src="./img/lt_hp.png" alt="Card image" style={{ maxWidth: '100%', height: 250 }} />
                        <div className="card-body text-center">
                            <h4 className="card-title text-center">HP OMEN</h4>
                            <p className="card-text">A young global smartphone brand focusing on introducing perfect sound quality</p>
                            <a href="#" className="btn btn-primary mr-1">Detail</a>
                            <a href="#" className="btn btn-danger">Cart</a>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Hp;