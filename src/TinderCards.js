import { SwipeableDrawer } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import aamir from './img/aamir.jpg';
import elone from './img/elone.jpg';
import jeff from './img/jeff.jpg';
import sharukh from './img/sharukh.jpg';
import './tinderCards.css';
import axios from 'axios';


export default function TinderCards() {

    const [people, setpeople] = useState([]);

    useEffect(() => {
        async function featchData() {
            const req = await axios.get('https://tinder-clone-by-me.herokuapp.com/tinder/cards');
            // console.log(req.data);
            setpeople(req.data);
        }
        featchData();
    }, [])

    const swiped = (direction) => {
        console.log('You swiped: ' + direction)
    }

    const outOfFrame = (myIdentifier) => {
        console.log(myIdentifier + ' left the screen')
    }
    return (
        <div className='tinder-cards'>
            <div className="cards-container">
                {people.map((persion) => (
                    <TinderCard
                        className="swipe"
                        key={persion.name}
                        preventSwipe={["up", "down"]}
                        onSwipe={(dir) => swiped(dir, persion.name)
                        }
                        onCardLeftScreen={() => outOfFrame(persion.name)}
                    >
                        <div className="card" style={{ backgroundImage: "url(" + persion.imgURL + ")" }}>
                            <h3>{persion.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    )
}
