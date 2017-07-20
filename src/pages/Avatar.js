import React from 'react';
import { Link } from 'react-router-dom';
import Ninja from '../Images/Lucy_Ninja.png';

class Avatar extends React.Component {
    render () {
        return (
            <div className="avatar">
                <img width="50%" src= {Ninja} />  
                <span>Welcome, ninja! Are you ready to begin your training?<br />
                Click Play to start Level 1: Academy</span>
                <Link to='/question'><button className="button is-primary is-outlined is-large">Play</button></Link>
            </div>
        )
    }
}

export default Avatar;