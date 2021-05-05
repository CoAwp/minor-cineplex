import React, {Component} from 'react';
import Header from './Header'

export default class Login extends Component{

    render(){
        return(
            <div>
                <div>
                    <Header/>
                </div>
                <div className="p-4"/>
                <div className="p-3"/>
                <div className="container-fluid background-image">
                    <div className="row visible-lg"></div>
                    <div className="row wrapper fadeInDown align-items-center">
                        <div className="card" id="formContent">
                            <br/>
                            <div className="fadeIn first bg-light align-self-center">
                            <img src="https://i.ibb.co/885VpbH/Rectangle-104.png" className="image-fluid mx-auto" id="icon" alt="User Icon" />
                            </div>
                            <div className="d-grid gap-1 col-10 mx-auto my-4">
                                <form class="form-floating my-1">
                                    <input type="email" class="form-control" id="floatingInputValue" placeholder="name@example.com"/>
                                    <label for="floatingInputValue">Email</label>
                                </form>
                                <form class="form-floating">
                                    <input type="password" class="form-control" id="floatingInputValue" placeholder="name@example.com"/>
                                    <label for="floatingInputValue">Password</label>
                                </form>
                                <form>
                                    <div className="d-grid gap-1 col-12 mx-auto py-5">
                                        <button type="submit" className="btn btn-red fadeIn text-light" href="/showtime">LogIn</button>
                                        <a role="a" className="btn btn-grey fadeIn text-light" href="/register">Sign up</a>
                                    </div>
                                </form> 
                            </div>
                        </div>
                    </div>
                    <div className="row visible-lg"></div>
                    <div className="d-grid p-3 m-5"></div>
                </div>
            </div>
                
        )
    }
}