import React, {Component} from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import SectionComponent from "./SectionComponent/SectionComponent";
import SitePost from "./SitePost/SitePost";


class Content extends Component {
    render(){
        return (
            <div>
                <SectionComponent>
                    <SitePost/>
                </SectionComponent>
            </div>
        );
    }
}

export default Content;