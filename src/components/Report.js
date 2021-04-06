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
                    <div className="">
                        <div class="card">
                            <div class="card-body">
                                This is some text within a card body.
                            </div>
                        </div>
                    </div> 
                </div>
            </div>  
        )
    }
}