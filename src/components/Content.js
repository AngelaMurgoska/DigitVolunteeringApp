import React, {Component} from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Categories from '../components/Kategorii/Categories.js'
import SectionComponent from "./SectionComponent/SectionComponent";
import SitePost from "./SitePost/SitePost";


class Content extends Component {
    render(){
        return (
            <div>
            <SectionComponent>
            <Categories  categories={this.props.categories}  />
            </SectionComponent>
                <SectionComponent>
                    <SitePost/>
                </SectionComponent>
            </div>
        );
    }
}

export default Content;