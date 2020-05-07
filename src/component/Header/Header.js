import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Routing from '../Routing/Routing';
import People from '../../container/People';
import Weather from '../Weather/Weather'

import './Header.scss'


const Header = (prop) => {
    return (
        
        <div >

            <BrowserRouter>
                <div className="Header">
                    <h1> People Base</h1>
                    <Routing></Routing>
                </div>

                <Route path="/" exact render={ () => <People { ...prop } /> }></Route>

                <Route path="/Weather" exact component={Weather}></Route>

            </BrowserRouter>

        </div>
    )
}

export default Header