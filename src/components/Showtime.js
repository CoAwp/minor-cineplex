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
                                <h3 className="text-algin-left text-dark">Showtime</h3>
                            </div>
                            <div className="dark-grey">
                                <div className="col-2 mx-2"/>
                                <div>
                                    <select class="form-select col-10" aria-label="Default select example">
                                        <option selected>Branch Select</option>
                                        <option value="1">Branch One</option>
                                        <option value="2">Branch Two</option>
                                        <option value="3">Branch Three</option>
                                    </select>
                                </div>
                                <div className="col-2 mx-2"/>
                            </div>
                            
                            <div className="row my-1">
                                <div className="col-4">
                                    <img src="https://cdn.shopify.com/s/files/1/0057/3728/3618/products/9d8e73e436b536a7c81644c6e9877c7a_1c9d0f90-9991-4326-8f37-3dd980abeacf_480x.progressive.jpg?v=1573590262" className="img-fluid st-poster"/>
                                </div>
                                <div className="col-8">
                                    <div className="fs-1 fw-bold text-uppercase bg-warning text-center">Back to the Future</div>
                                    <p className="col-10 mx-auto p-3">Marty McFly, a typical American teenager of the Eighties, is accidentally sent back to 1955 in a plutonium-powered DeLorean "time machine" invented by a slightly mad scientist. During his often hysterical, always amazing trip back in time, Marty must make certain his teenage parents-to-be meet and fall in love - so he can get back to the future.</p>
                                    <div className="row-8 text-center">
                                        <p>Theater : 1</p>
                                        <p>Audio : English</p>
                                    </div>
                                    <div className="row-2 m-5">
                                            <a type="a" class="col m-2 btn btn-secondary" disabled>10:00</a>
                                            <a type="a" class="col m-2 btn btn-secondary" disabled>12:00</a>
                                            <a type="a" class="col m-2 btn btn-warning" href='/movie_seat'>14:00</a>
                                            <a type="a" class="col m-2 btn btn-warning" href='/movie_seat'>16:00</a>
                                    </div>
                                </div>
                            </div>
                            <div className="row my-1">
                                <div className="col-4">
                                    <img src="https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/1800/the-favourite-TFAV_Cape_Frame_Online_PosterFIN1_rgb.jpg" className="img-fluid st-poster"/>
                                </div>
                                <div className="col-8">
                                    <div className="fs-1 fw-bold text-uppercase bg-warning text-center">Favourite</div>
                                    <p className="col-10 mx-auto p-3">Queen Anne of England falls sick while her close aide Sarah Churchill oversees the country's important matters. Soon, things take a turn when Sarah's cousin Abigail starts serving the queen.</p>
                                    <div className="row-8 text-center">
                                        <p>Theater : 3</p>
                                        <p>Audio : English</p>
                                    </div>
                                    <div className="row-2 m-5">
                                            <a type="a" class="col m-2 btn btn-secondary" disabled>10:00</a>
                                            <a type="a" class="col m-2 btn btn-secondary" disabled>12:00</a>
                                            <a type="a" class="col m-2 btn btn-warning" href='/movie_seat'>14:00</a>
                                            <a type="a" class="col m-2 btn btn-warning" href='/movie_seat'>16:00</a>
                                    </div>
                                </div>
                            </div>
                            <div className="row my-1">
                                <div className="col-4">
                                    <img src="https://cdn.shopify.com/s/files/1/0057/3728/3618/products/23fd3ba334c1e8e84c96906497d577bf_6d652cf7-d705-42d2-96aa-2c3963f8a178_480x.progressive.jpg?v=1573613876" className="img-fluid st-poster"/>
                                </div>
                                <div className="col-8">
                                    <div className="fs-1 fw-bold text-uppercase bg-warning text-center">Star Wars</div>
                                    <p className="col-10 mx-auto p-3">Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vader.</p>
                                    <div className="row-8 text-center">
                                        <p>Theater : 2</p>
                                        <p>Audio : Thai</p>
                                    </div>
                                    <div className="row-2 m-5">
                                            <a type="a" class="col m-2 btn btn-secondary" disabled>10:00</a>
                                            <a type="a" class="col m-2 btn btn-secondary" disabled>12:00</a>
                                            <a type="a" class="col m-2 btn btn-warning" href='/movie_seat'>14:00</a>
                                            <a type="a" class="col m-2 btn btn-warning" href='/movie_seat'>16:00</a>
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