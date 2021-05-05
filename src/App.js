import { Component } from 'react';
import './App.css';
import UserInfo from './components/UserInfo'
import UserInput from './components/UserInput'
import Header from './components/Header'
import Showtime from './components/Showtime'

class App extends Component {
  render(){
    return(
    <body>
          <div>
              <Header/>
          </div>
          <div className="container-fluid background-image p-5">
              <div className="row row-2 py-5"/>
              <div className="row">
                  <div className="col col-10 mx-auto">
                      <div className="card">
                        <div className="card grad1">
                            <div className="card-body grad1">
                                <h2 className="text-center fw-bold">
                                  NOW SHOWING
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
                      </div>
                      <div className="card my-4">
                          <div className="card grad1">
                            <div className="card-body grad1">
                                <h2 className="text-center fw-bold">
                                  COMING SOON
                                </h2>
                            </div>
                        </div>
                          <div className="row card-body">
                            <div className="col d-grid">
                              <img src="https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/1800/vice-web.jpg" className="img-fluid poster"/>
                              <a type="a" className="btn btn-warning my-1 justify-object-center" href="/showtime">Buy Now</a>
                            </div>
                            <div className="col d-grid">
                              <img src="https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/750/BLACKKLANSMAN_FLAG_ONESHEET_FINISH_V11547059100.jpg" className="img-fluid poster"/>
                              <a type="a" className="btn btn-warning my-1 justify-object-center" href="/showtime">Buy Now</a>
                            </div>
                            <div className="col d-grid">
                              <img src="https://www.indiewire.com/wp-content/uploads/2019/12/ad-astra.jpg?w=500" className="img-fluid poster"/>
                              <a type="a" className="btn btn-warning my-1 justify-object-center" href="/showtime">Buy Now</a>
                            </div>
                            <div className="col d-grid">
                              <img src="https://www.indiewire.com/wp-content/uploads/2019/12/glass.jpg?w=409" className="img-fluid poster"/>
                              <a  type="a" className="btn btn-warning my-1 justify-object-center" href="/showtime">Buy Now</a>
                            </div>
                          </div>
                      </div>
                  </div>
              </div> 
          </div>
    </body>  
    )
  }
  ;
}

export default App;

<iframe width="900" height="506" src="https://www.youtube.com/embed/PMivT7MJ41M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>