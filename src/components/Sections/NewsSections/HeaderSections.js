import React, {Component} from 'react';
import SearchPage from './SearchPage.js';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './HeaderSections.css'
import Image from 'react-bootstrap/Image'



class HeaderSections extends Component {
    render(){
        return (
            <div className={"container-fluid display"}>
                <div className={"row"}>
                            <div className={"col-2"}>
                               // <i class="fas fa-coffee"></i>
                            </div>
                            <div className={"col-8"}>
                                 <h2>Волонтирај во образование</h2>
                            </div>
                </div>
                <div className="row">
                    <div className={"col-4"}>
                          <SearchPage/>
                    </div>
                </div>

           </div>
        );
    }
}

export default HeaderSections;