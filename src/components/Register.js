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
                <div className="row p-5"/>
                <div className="d-grid p-4" />
                <div className="row align-items-start fadeInDown">
                    <div className="col-4"/>
                    <div class="col d-block bg-light text-dark d-block-round rounded">
                        <form method="POST">
                            <div class="form-group text-dark text-lg p-2 m-2">
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
                            <input type="text" class="form-control form-control-sm rounded" id="firstName" placeholder="John" required/>

                            <label for="lastName" class="form-label">Last Name</label>
                            <input type="text" class="form-control form-control-sm rounded" id="lastName" placeholder="Lemon" required/>

                            <label for="address" class="form-label">Address</label>
                            <textarea class="form-control form-control-sm rounded" id="address" rows="2" required></textarea>

                            <label for="gender" class="form-label" >Gender</label>
                            <select class="form-select form-select-sm rounded" aria-label="Default select example" required>
                            <option selected>Select Gender</option>
                            <option value="1">Male</option>
                            <option value="2">Woman</option>
                            <option value="3">Other</option>
                            </select>

                            <label for="telephone" class="form-label">Telephone Number</label>
                            <input type="text" class="form-control form-control-sm rounded" id="telephone" placeholder="08x-xxx-xxxx" required/>

                            <label for="emailAddress" class="form-label">Email address</label>
                            <input type="email" class="form-control form-control-sm rounded" id="emailAddress" placeholder="name@example.com" required/>

                            <label for="creditCard" class="form-label">Credit Card Number</label>
                            <input type="number" class="form-control form-control-sm rounded" id="creditCard" placeholder="xxxx-xxxx-xxxx-xxxx"/>

                            <label for="inputPassword" class="form-label">Password</label>
                            <input type="password" class="form-control form-control-sm rounded" id="inputPassword" required/>

                            <label for="inputConfirmPassword" class="form-label">Confirm Password</label>
                            <input type="password" class="form-control form-control-sm rounded" id="inputConfirmPassword" required/>

                            <br/>
                            <div class="d-grid gap-2 col mx-auto">
                                <button type="submit" class="btn btn-red btn-outline-danger text-light">Confirm</button>
                            </div>
                            <br/>
                        </form>
                    </div>
                    <div className="col-4"/>
                </div>
                <br/><br/>
            </div>  
        </div>  
        )
    }
}