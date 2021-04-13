import React from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css';

import Header from './components/Header'
import Favorites from './pages/Favorites'
import Cart from './pages/Cart'
import ImageGallery from './pages/ImageGallery'

function App() {
    return (
        <div className="App">
            <Header />

            <Switch>
                <Route exact path='/'>
                    <ImageGallery />
                </Route>
                <Route path='/favorites'>
                    <Favorites />
                </Route>
                <Route path='/cart'>
                    <Cart />
                </Route>
            </Switch>
        </div>
    );
}

export default App;
