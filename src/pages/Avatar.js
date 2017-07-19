import React from 'react';
import { Link } from 'react-router-dom';
import Ninja from '../Images/Lucy_Ninja.png';

class Avatar extends React.Component {
    render () {
        return (
            <div className="avatar">
                <div><img width="75%" src= {Ninja} /></div>
                <Link to='/question'><button className="button is-primary is-outlined is-large">Continue</button></Link>
              
            </div>
        )
    }
}

export default Avatar;