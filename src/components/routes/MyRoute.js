import React, { Component } from 'react';
import { Routes,Route } from 'react-router-dom';
import About from '../pages/About';
import Contact from '../pages/Contact';
import HomePage from '../pages/HomePage';
import UrlParamPassValue from '../pages/UrlParamPassValue';

class MyRoute extends Component {
    render() {
        return (
            <div>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/About" element={<About />} />
                    <Route path="/Contact" element={<Contact />} />
                    <Route path="/UrlParamPassValue/:id" element={<UrlParamPassValue />} />
                </Routes>
            </div>
        );
    }
}

export default MyRoute;