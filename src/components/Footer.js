import React, {Component} from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Footer.css'

class Footer extends Component {
    render(){
        return (
            <div className={"container-fluid footer-bg py-3 mt-4"}>
                <h1>This is footer</h1>
            </div>
        );
    }
}

export default Footer;