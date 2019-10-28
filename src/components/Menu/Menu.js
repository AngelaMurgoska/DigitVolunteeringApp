import React, {Component} from 'react';
import vimage from '../../assets/images/icon.PNG'
import './Menu.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class Menu extends Component {
    state= {
        title:"Волонтирај"
    }
    render(){
        return (
            <nav className="navbar fixed-top navbar-expand-lg fixed-top menu-bg">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <div>
                            <img src={vimage}/>
                            <span className={"menu-text"}>{this.state.title}</span>
                        </div>
                    </a>
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                            data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link menu-text li-menu-padding" href="#">Sign up</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link menu-text li-menu-padding" href="#">Log in</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Menu;