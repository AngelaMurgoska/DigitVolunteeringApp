import React, {Component} from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import FilteringSections from "./FilteringSections/FilteringSections";
import NewsSections from "./NewsSections/NewsSections.js";
import './Sections.css';

class Sections extends Component {
    render(){
        return (
            <div className={"container-fluid countainer"}>
                <div className={"row"}>
                    <div className={"col-2"}>
                        <FilteringSections/>
                    </div>
                    <div className={"col-10"}>
                        <NewsSections/>
                    </div>
                </div>
            </div>
    );
    }
}

export default Sections;