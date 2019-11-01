import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import StoryPage from './components/StoryPage/StoryPage'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import DetailsPage from "./components/DetailsPage/DetailsPage";
import DonateForm from "./components/DonateForm";
const routing=(
    <Router>
        <div>
            <Route exact path="/stories" component={StoryPage}/>
            <Route exact path="/donateForm" component={DonateForm}/>
            <Route exact path="/details/:id" component={DetailsPage}/>
            <Route exact path="/" component={App}/>
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
