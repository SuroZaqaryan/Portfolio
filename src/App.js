import React from 'react';
import './App.css';
import {Login} from './components/Login/Login';
import Route from "react-router-dom/es/Route";
import { Header } from './components/Header/Header';
import ContentContainer from './components/Content/ContentContainer';
import ProfileContainer from "./components/Profile/ProfileContainer";
import NewsContainer from "./components/News/NewsContainer";
import './index.css'
import BusinessContainer from "./components/News/NewsCategories/Business/BusinessContainer";

function App() {
    return (
        <div className="App">
            <Route path='/login' render={() => <Login />}/>
            <Route path='/content' render={() => <ContentContainer />}/>
            <Route path='/header' render={() => <Header /> }/>
            <Route path='/profile/:userId' render={() => <ProfileContainer /> }/>
            <Route path='/news' render={() => <NewsContainer /> }/>
            <Route path='/Business' render={() => <BusinessContainer />}/>
        </div>
    );
}

export default App;
