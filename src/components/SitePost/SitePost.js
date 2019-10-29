import React, {Component} from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import sideImg from '../../assets/images/volunteer-hands.jpg'
import './SitePost.css'

class SitePost extends Component {
    render(){
        return (
            <div className={"row post-text"}>
                <div className={"col-4"}>
                    <img src={sideImg} className={"img-fluid rounded-circle"}/>
                </div>
                <div className={"col-2"}></div>
                <div className={"col "}>
                    <h4 className={"pb-3"}>Волонтирањето е бесценето</h4>
                    <div className={"pb-2"}>
                        За волонтерите е двојно поверојатно дека би донирале во хуманитарни цели за разлика од оние кои не волонтираат.
                    </div>
                    <div className={"pb-2"}>
                        Волонтеризмот го подобрува здравјето со подобрување на телесната и менталната состојба и намалување на стресот.
                    </div>
                    <div className={"pb-2"}>
                        Оние кои волонтираат обично имаат 27% поголеми шанси за вработување.
                    </div>
                </div>
            </div>
        );
    }
}

export default SitePost;