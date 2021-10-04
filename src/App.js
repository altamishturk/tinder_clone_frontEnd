import React from 'react';
import './app.css';
import Header from './Header';
import TinderCards from './TinderCards';
import SwipeButtons from './SwipeButtons';


export default function App() {
    return (
        <div className='container'>
            <Header />
            <TinderCards />
            <SwipeButtons />
        </div>
    )
}
