import React, {Component} from 'react';
import logo from '../logo.svg'
import './Header.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Menu from "./Menu/Menu";
import CarouselComponent from "./CarouselComponent/CarouselComponent"
import "react-responsive-carousel/lib/styles/carousel.min.css";


class Header extends Component {
    render(){
        return (
            <div className={"container-fluid pt-3"}>
            <Menu/>
            <CarouselComponent/>
            </div>
        );
    }
}

export default Header;
