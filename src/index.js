import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import { GalleryContextProvider } from './components/GalleryContext'
import './index.css';
import App from './App';

ReactDOM.render(
    <React.StrictMode>
        <GalleryContextProvider>
            <Router>
                <App />
            </Router>
        </GalleryContextProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
