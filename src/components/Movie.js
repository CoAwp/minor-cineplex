import React, {Component} from 'react';
import Header from './Header'

export default class Showtime extends Component{
    render(){
        return(
    <div>
        <div>
            <Header/>
        </div>
        <div className="container-f;uid background-image p-5">
            <div className="row row-2 py-5"/>
            <div className="row">
                <div className="col col-10 mx-auto">
                    <div className="card">
                        <div className="carg grad1">
                            <div className="card-body grad1">
                                <h2 className="text-center fw-bold">
                                    MOVIES LIST - NOW SHOWING
                                </h2>
                            </div>
                        </div>
                        <div className="row card-body">
                            <div className="col d-grid">
                                <img src="https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/1800/star.jpg" className="img-fluid poster"/>
                                <a type="a" className="btn btn-warning my-1 justify-object-center" href="/showtime">Buy Now</a>
                            </div>
                            <div className="col d-grid">
                                <img src="https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/1800/the-favourite-TFAV_Cape_Frame_Online_PosterFIN1_rgb.jpg" className="img-fluid poster"/>
                                <a type="a" className="btn btn-warning my-1 justify-object-center" href="/showtime">Buy Now</a>
                            </div>
                            <div className="col d-grid">
                                <img src="https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/1800/bohemian-rhapsody-web.jpg" className="img-fluid poster"/>
                                <a type="a" className="btn btn-warning my-1 justify-object-center" href="/showtime">Buy Now</a>
                            </div>
                            <div className="col d-grid">
                                <img src="https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/1800/BlackPanther59f24429d2605.jpg" className="img-fluid poster"/>
                                <a type="a" className="btn btn-warning my-1 justify-object-center" href="/showtime">Buy Now</a>
                            </div>
                        </div>
                        <div className="row card-body">
                            <div className="col d-grid">
                                <img src="https://cdn.shopify.com/s/files/1/0057/3728/3618/products/9d8e73e436b536a7c81644c6e9877c7a_1c9d0f90-9991-4326-8f37-3dd980abeacf_480x.progressive.jpg?v=1573590262" className="img-fluid poster"/>
                                <a type="a" className="btn btn-warning my-1 justify-object-center" href="/showtime">Buy Now</a>
                            </div>
                            <div className="col d-grid">
                                <img src="https://cdn.shopify.com/s/files/1/0057/3728/3618/products/23fd3ba334c1e8e84c96906497d577bf_6d652cf7-d705-42d2-96aa-2c3963f8a178_480x.progressive.jpg?v=1573613876" className="img-fluid poster"/>
                                <a type="a" className="btn btn-warning my-1 justify-object-center" href="/showtime">Buy Now</a>
                            </div>
                            <div className="col d-grid">
                                <img src="https://cdn.shopify.com/s/files/1/0057/3728/3618/products/no-time-to-die_krgsl7mv_480x.progressive.jpg?v=1604419849" className="img-fluid poster"/>
                                <a type="a" className="btn btn-warning my-1 justify-object-center" href="/showtime">Buy Now</a>
                            </div>
                            <div className="col d-grid">
                                <img src="https://cdn.shopify.com/s/files/1/0057/3728/3618/products/108b520c55e3c9760f77a06110d6a73b_e97cf224-d57f-44e3-8477-4f5479cd746b_480x.progressive.jpg?v=1573616089" className="img-fluid poster"/>
                                <a type="a" className="btn btn-warning my-1 justify-object-center" href="/showtime">Buy Now</a>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>

        )
    }


}