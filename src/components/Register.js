import React, {Component} from 'react';
import Header from './Header'
import Footer from './Footer'

export default class Register extends Component{

    render(){
        return(
        <div>
            <div className="container-fluid background-image ">
                <div>
                    <Header/>
                </div>
                <br/>
                <div className="row align-items-start fadeInDown">
                    <div className="col-4"/>
                    <div class="col d-block bg-light text-dark d-block-round">
                        <div class="form-group text-dark text-lg">
                            <label>Upload Image</label>
                            <div class="input-group">
                                <span class="input-group-btn">
                                    <span class="btn btn-default btn-file">
                                    <input type="file" id="imgInp"/>
                                    </span>
                                </span>
                            </div>
                            <img id='img-upload'/>
                        </div>
                        <label for="firstName" class="form-label">First Name</label>
                        <input type="text" class="form-control form-control-sm" id="firstName" placeholder="John"/>

                        <label for="lastName" class="form-label">Last Name</label>
                        <input type="text" class="form-control form-control-sm" id="lastName" placeholder="Lemon"/>

                        <label for="address" class="form-label">Address</label>
                        <textarea class="form-control form-control-sm" id="address" rows="2"></textarea>

                        <label for="gender" class="form-label">Gender</label>
                        <select class="form-select form-select-sm" aria-label="Default select example">
                        <option selected>Select Gender</option>
                        <option value="1">Male</option>
                        <option value="2">Woman</option>
                        <option value="3">Other</option>
                        </select>

                        <label for="telephone" class="form-label">Telephone Number</label>
                        <input type="text" class="form-control form-control-sm" id="telephone" placeholder="08x-xxx-xxxx"/>

                        <label for="emailAddress" class="form-label">Email address</label>
                        <input type="email" class="form-control form-control-sm" id="emailAddress" placeholder="name@example.com"/>

                        <label for="creditCard" class="form-label">Credit Card Number</label>
                        <input type="number" class="form-control form-control-sm" id="creditCard" placeholder="xxxx-xxxx-xxxx-xxxx"/>

                        <label for="inputPassword" class="form-label">Password</label>
                        <input type="password" class="form-control form-control-sm" id="inputPassword"/>

                        <label for="inputConfirmPassword" class="form-label">Confirm Password</label>
                        <input type="password" class="form-control form-control-sm" id="inputConfirmPassword" />

                        <br/>
                        <div class="d-grid gap-2 col-6 mx-auto">
                            <button type="button" class="btn btn-outline-success ">Confirm</button>
                        </div>
                        <br/>
                    </div>
                    <div className="col-4"/>
                </div>
                <div>
                    <Footer/>
                </div>
            </div>  
        </div>  
        )
    }
}