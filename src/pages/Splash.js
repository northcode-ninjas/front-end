import React from 'react';
import { Link } from 'react-router-dom';
import Sensei1 from '../Images/Sensei1.jpeg';

class Splash extends React.Component {
    render () {
        return (
            <div className="splash">
                <img src= {Sensei1} />
                <div>Welcome Student,<br />please enter your<br />ninja name below:</div>
                <br />
                <div>Welcome Student, please enter your ninja name below:</div>
                <form onSubmit="" >
                    <input className="input is-primary" type="text" placeholder="Your ninja name here" />
                    <Link to='/avatar'><button className="button is-primary">Submit</button></Link>
                </form>
            </div>
        )
    }
}

export default Splash;