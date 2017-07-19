import React from 'react';
import { Link } from 'react-router-dom';
import Star from '../Images/ninja-throwing-star.jpg';

class LevelUp extends React.Component {
    render () {
        return (
            <div className="levelUp">
                <div><img width="75%" src= {Star} /></div>
                <Link to='/question'><button className="button is-primary is-outlined is-large">Continue</button></Link>
              
            </div>
        )
    }
}

export default LevelUp;