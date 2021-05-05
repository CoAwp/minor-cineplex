import React, {Component} from 'react';

export default class Header extends Component{

    render(){
        return(
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark bg-gradient bg-light text-light fixed-top z-depth-5">
                    <a class="navbar-brand mx-5" href="/home"><img src="https://i.ibb.co/XF2S98p/Rectangle-3.png" className="float-start img-fluid"></img></a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse ml-auto" id="navbarNav">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item active">
                            </li>
                            <li class="nav-item">
                                <a class="nav-item nav-link ms-5" href="/Movie">MOVIE<span class="sr-only"></span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-item nav-link ms-5" href="/Showtime">SHOWTIME</a>
                            </li>
                            
                            <li class="nav-item">
                                <a class="nav-item nav-link ms-5" href="Report">REPORT</a>
                            </li>
                        </ul>
                        <div className='col-5'/>
                                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <div className="d-flex d-inline my-2 my-lg-0">
                            <a type="a" className="btn btn-warning me-2" href="/Login">Login</a>
                        </div>
                        <div className='mx-4'/>
                    </div>
                </nav>
        )
    }
}

