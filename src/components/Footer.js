import React, {Component} from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Footer.css'
import FooterLinks from "./FooterLinks/FooterLinks";

class Footer extends Component {
    render(){
        return (
            <div className={"container-fluid footer-bg py-3 mt-4"}>
                <div className={"row"}>
                    <div className={"col-7"}>
                        <FooterLinks/>
                    </div>
                    <div className={"col"}>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;