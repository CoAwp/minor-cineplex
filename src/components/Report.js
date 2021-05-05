import React, {Component} from 'react';
import Header from './Header'

export default class Report extends Component{

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
                        <div className="col col-7 mx-auto">
                            <div class="card border border-light">
                                <div class="card-body btn-red text-light">
                                    <h5 className="m-1">Report</h5>
                                </div>
                            </div>
                            <div class="card card-body-bg">
                                <div className="col col-10 mx-auto g-5">
                                    <div class="card-body text-light">
                                        <p>Name : </p>
                                        <p>Phone: </p>
                                        <p>Email: </p>
                                    </div>
                                    <form method="POST">
                                        <input type="text" className="form-control form-control-sm" id="reportSubject" placeholder="Subject" required/>
                                        <textarea className="form-control my-2 justify-content-md-center" id="reportMessage" rows="3" required/>
                                        <div className="d-grid gap-5 d-md-flex m-4 justify-content-md-center">
                                            <button type="submit" className="btn btn-sm btn-warning text-dark">Confirm</button>
                                            <a type="submit" className="text-light text-sm-1 my-2">Cancel</a>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="d-grid p-5 m-5"/>
                        </div>
                    </div> 
                </div>
            </div>  
        )
    }
}