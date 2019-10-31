import React, {Component} from 'react';
import SearchPage from './SearchPage.js';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './HeaderSections.css'
import Image from 'react-bootstrap/Image'



class HeaderSections extends Component {
    render(){
        return (
            <div className={"container-fluid display"}>
                <div className={"row "}>
                                <img className="img-icon" src={this.props.categories[0].backgroundUrl}/>
                                <h1 className={"font-weight-bold justify content centre"}> {this.props.categories[0].title}</h1>
                </div>
                <div className="row pt-5 justify-content-end">
                    <div className={"col-4"}>
                          <SearchPage/>
                    </div>
                </div>
           </div>
        );
    }
}

export default HeaderSections;