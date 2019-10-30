import React, {Component} from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './FooterSocials.css'

class FooterSocials extends Component {

    render(){
        return (
            <div className={"pt-3"}>
                <div className={"text-center footer-text h5"}>Заследи не</div>
                <hr className={"hr-footer-link-color"}/>
            </div>
        );
    }
}

export default FooterSocials;
