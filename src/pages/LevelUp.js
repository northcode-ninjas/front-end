import React from 'react';
import { Link } from 'react-router-dom';
import ninjaStar from '../Images/ninja-throwing-star.jpg';

class LevelUp extends React.Component {
    render () {
        return (
            <div className="levelUp">
                <img width="50%" src= {Star} />
                <span>Well done, student! Your Academy training is complete!</span>
                <span>Press Graduate to begin Level 2: Genin</span>
                <Link to='/question'><button className="button is-primary is-outlined is-large"> Graduate</button></Link>
                <Link to='/avatar'><button className="button is-primary is-outlined is-large"> Back</button></Link>
              
            </div>
        );
    }
}

export default LevelUp;