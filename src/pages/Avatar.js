import React from 'react';
import { Link } from 'react-router-dom';
import Ninja from '../Images/Lucy_Ninja.png';

class Avatar extends React.Component {
    render () {
        return (
            <div className="avatar">
<<<<<<< HEAD

                <img width="50%" src= {Ninja} />  
                <span>Welcome, ninja! Are you ready to begin your training?<br />
                Click Play to start Level 1: Academy</span>
                <Link to='/question'><button className="button is-primary is-outlined is-large">Play</button></Link>
=======
>>>>>>> 43472a7... [feat-26] [Avatar] page created with sample img
                <div><img width="75%" src= {Ninja} /></div>
                <Link to='/question'><button className="button is-primary is-outlined is-large">Continue</button></Link>
              
            </div>
        )
    }
}

export default Avatar;