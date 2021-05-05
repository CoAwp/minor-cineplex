import React, {Component} from 'react';
import Header from './Header'


export default class Showtime extends Component{
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
                                <h3 className="text-algin-left text-dark">Movie Details</h3>
                            </div>
                            <div className="col-11 mx-auto m-1 fs-1 fw-bold bg-warning text-uppercase text-center">Favourite</div>
                            <div className="row">
                                <div className="col-5">
                                    <img className="m-3 rounded showtime-poster mx-auto d-block" src="https://cdn.shopify.com/s/files/1/0057/3728/3618/products/9d8e73e436b536a7c81644c6e9877c7a_1c9d0f90-9991-4326-8f37-3dd980abeacf_480x.progressive.jpg?v=1573590262"/>
                                </div>
                                <div className="col-7">
                                    <p className="col-12 mx-auto p-3">Queen Anne of England falls sick while her close aide Sarah Churchill oversees the country's important matters. Soon, things take a turn when Sarah's cousin Abigail starts serving the queen.</p>
                                    <div className="row text-center m-5">
                                        <p>Theater : 3</p>
                                        <p>Movie Length : 140 minutes</p>
                                        <p>Audio : English</p>
                                        <p>Subtitle : Thai</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-11 mx-auto row text-dark grey rounded">
                                <p className="fs-5 text-center fw-bold">Movie Trailer</p>
                            </div>
                            <div>
                                <video className="d-block mx-auto m-1" src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" width="80%" height="80%" controls="controls" autoplay="" muted />
                            </div>
                            <div className="col-11 mx-auto row text-dark grey rounded my-5">
                                <p className="fs-5 text-center fw-bold">Seat Selection</p>
                            </div>
                            <div className="row p-1">
                                <input type="checkbox" class="btn-check" id="A1" autocomplete="off"/>
                                <label class="btn btn-outline-danger mx-auto col-1 m-1" for="A1">A1</label>
                                <input type="checkbox" class="btn-check col" id="A2" autocomplete="off"/>
                                <label class="btn btn-outline-danger mx-auto col-1 m-1" for="A2">A2</label>
                                <input type="checkbox" class="btn-check" id="A3" autocomplete="off"/>
                                <label class="btn btn-outline-danger mx-auto col-1 m-1" for="A3">A3</label>
                                <input type="checkbox" class="btn-check col" id="A4" autocomplete="off"/>
                                <label class="btn btn-outline-danger mx-auto col-1 m-1" for="A4">A4</label>
                                <div className="col-1 mx-auto"/>
                                <input type="checkbox" class="btn-check" id="A5" autocomplete="off"/>
                                <label class="btn btn-outline-danger mx-auto col-1 m-1" for="A5">A5</label>
                                <input type="checkbox" class="btn-check col" id="A6" autocomplete="off"/>
                                <label class="btn btn-outline-danger mx-auto col-1 m-1" for="A6">A6</label>
                                <input type="checkbox" class="btn-check" id="A7" autocomplete="off"/>
                                <label class="btn btn-outline-danger mx-auto col-1 m-1" for="A7">A7</label>
                                <input type="checkbox" class="btn-check col" id="A8" autocomplete="off"/>
                                <label class="btn btn-outline-danger mx-auto col-1 m-1" for="A8">A8</label>
                            </div>
                            <div className="row ">
                                <input type="checkbox" class="btn-check" id="B1" autocomplete="off"/>
                                <label class="btn btn-outline-danger mx-auto col-1 m-1" for="B1">B1</label>
                                <input type="checkbox" class="btn-check col" id="B2" autocomplete="off"/>
                                <label class="btn btn-outline-danger mx-auto col-1 m-1" for="B2">B2</label>
                                <input type="checkbox" class="btn-check" id="B3" autocomplete="off"/>
                                <label class="btn btn-outline-danger mx-auto col-1 m-1" for="B3">B3</label>
                                <input type="checkbox" class="btn-check col" id="B4" autocomplete="off"/>
                                <label class="btn btn-outline-danger mx-auto col-1 m-1" for="B4">B4</label>
                                <div className="col-1 mx-auto"/>
                                <input type="checkbox" class="btn-check" id="B5" autocomplete="off"/>
                                <label class="btn btn-outline-danger mx-auto col-1 m-1" for="B5">B5</label>
                                <input type="checkbox" class="btn-check col" id="B6" autocomplete="off"/>
                                <label class="btn btn-outline-danger mx-auto col-1 m-1" for="B6">B6</label>
                                <input type="checkbox" class="btn-check" id="B7" autocomplete="off"/>
                                <label class="btn btn-outline-danger mx-auto col-1 m-1" for="B7">B7</label>
                                <input type="checkbox" class="btn-check col" id="B8" autocomplete="off"/>
                                <label class="btn btn-outline-danger mx-auto col-1 m-1" for="B8">B8</label>
                            </div>
                            <div className="row ">
                                <input type="checkbox" class="btn-check" id="C1" autocomplete="off"/>
                                <label class="btn btn-outline-danger mx-auto col-1 m-1" for="C1">C1</label>
                                <input type="checkbox" class="btn-check col" id="C2" autocomplete="off"/>
                                <label class="btn btn-outline-danger mx-auto col-1 m-1" for="C2">C2</label>
                                <input type="checkbox" class="btn-check" id="C3" autocomplete="off"/>
                                <label class="btn btn-outline-danger mx-auto col-1 m-1" for="C3">C3</label>
                                <input type="checkbox" class="btn-check col" id="C4" autocomplete="off"/>
                                <label class="btn btn-outline-danger mx-auto col-1 m-1" for="C4">C4</label>
                                <div className="col-1 mx-auto"/>
                                <input type="checkbox" class="btn-check" id="C5" autocomplete="off"/>
                                <label class="btn btn-outline-danger mx-auto col-1 m-1" for="C5">C5</label>
                                <input type="checkbox" class="btn-check col" id="C6" autocomplete="off"/>
                                <label class="btn btn-outline-danger mx-auto col-1 m-1" for="C6">C6</label>
                                <input type="checkbox" class="btn-check" id="C7" autocomplete="off"/>
                                <label class="btn btn-outline-danger mx-auto col-1 m-1" for="C7">C7</label>
                                <input type="checkbox" class="btn-check col" id="C8" autocomplete="off"/>
                                <label class="btn btn-outline-danger mx-auto col-1 m-1" for="C8">C8</label>
                            </div>
                            <div>
                                <div className="d-grid gap-5 d-md-flex m-4 justify-content-md-center">
                                    <a type="a" className="btn btn-sm btn-warning text-dark text-center" href='/transaction'>Confirm</a>
                                    <a type="submit" className="text-dark text-sm-1 my-2" href='/showtime'>Cancel</a>
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