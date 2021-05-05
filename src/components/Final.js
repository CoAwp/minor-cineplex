import React, {Component} from 'react';
import Header from './Header';

export default class Final extends Component{

    render(){
        return(
        <div>
            <div>
                <Header/>
            </div>
            <div className="container-fluid background-image ">
                <div className="row row-2 p-5"/>
                <div className="p-4"/>
                <div className="row">
                    <div className="col visible-xl"/>
                    <div className="col-8 mx-auto">
                        <div className="card mx-auto">
                            <div className="card-body text-align-left text-light grey">
                                <h3 className="text-algin-left text-dark">Transaction</h3>
                            </div>
                            <div class="alert alert-success" role="alert">
                                Transaction Successful..!
                            </div>
                            <div className="col-11 mx-auto m-1 fs-1 fw-bold bg-warning text-uppercase text-center">Favourite</div>
                            <div className="row">
                                <div className="col-5">
                                    <img className="m-3 rounded showtime-poster mx-auto d-block" src="https://cdn.shopify.com/s/files/1/0057/3728/3618/products/9d8e73e436b536a7c81644c6e9877c7a_1c9d0f90-9991-4326-8f37-3dd980abeacf_480x.progressive.jpg?v=1573590262"/>
                                </div>
                                <div className="col-7 p-5">
                                    <div className="row">
                                        <div className="col text-start">
                                            <p>Theater : 3</p>
                                            <p>Movie Length : 140 minutes</p>
                                            <p>Audio : English</p>
                                            <p>Subtitle : Thai</p>
                                        </div>
                                        <div className="col text-start">
                                            <p>Date : 16/11/2021</p>
                                            <p>Time : 16:00</p>
                                            <p>Seat : A1, A2</p>
                                            <p>Total : 2 Seats</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col mx-auto">
                                    <img className="row mx-auto" src="https://i.ibb.co/bz4hvSJ/qrcode.png" max-width="50px"/> 
                                </div>
                                <p className="m-1 text-center">Please present this ticket or scan QR-Code to our staff at the theater.</p>
                                <div className="col-12 bg-dark round card mx-auto">
                                     <div className="row">
                                        <div className="col fw-bold text-start text-warning"></div>
                                        <div className="col fw-bold text-end text-light"></div>
                                     </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col visible-xl"/>
                </div>
                <div className="d-grid p-5 m-5"/>
            </div>
        </div>
        )
    }


}