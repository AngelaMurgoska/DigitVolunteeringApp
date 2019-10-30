import React, {Component} from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Footer.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

class Footer extends Component {
    render(){
        return (
            <div className={"container-fluid footer-bg py-3 mt-4"}>
                <h1>This is footer</h1>
                <div >
                    <ul>
                        <li>
                            <i class="fab fa-linkedin"></i>


                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Footer;