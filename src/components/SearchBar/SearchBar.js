import React, {Component} from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './SearchBar.css'

class SearchBar extends Component {
    render(){
        return (
            <div>
                <h1 className={"pb-4 h1-color mt-4"}>Поврзи се со настаните кои се случуваат наоколу</h1>
                <div className="active-pink-3 active-pink-4 mb-4 pt-4 d-flex">
                    <input className={"form-control mr-1"} type="text" placeholder="Пребарај настани" aria-label="Search" />
                    <button className={"btn btn-rounded active-pink-btn ml-2"}>Пребарај</button>
                </div>
            </div>
        );
    }
}

export default SearchBar;