import React, {Component} from 'react';

export default class Header extends Component{

    render(){
        return(
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark bg-gradient bg-light text-light fixed-top z-depth-5">
                    <a class="navbar-brand" href="/home"><img src="https://i.ibb.co/XF2S98p/Rectangle-3.png" className="float-start img-fluid"></img></a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse ml-auto" id="navbarNav">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item active">
                                <a class="nav-item nav-link " href="/home">HOME <span class="sr-only"></span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-item nav-link" href="/Movie">MOVIE</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-item nav-link" href="/Showtime">SHOWTIME</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-item nav-link " href="Report">REPORT</a>
                            </li>
                        </ul>
                        <div className='col-7'/>
                        <div className="d-flex d-inline my-2 my-lg-0">
                            <a type="a" className="btn btn-secondary btn-sm me-2" href="/Login">Login</a>
                            <a type="a" className="btn btn-light btn-sm" href="/Register">Register</a>
                        </div>
                    </div>
                </nav>
        )
    }
}

