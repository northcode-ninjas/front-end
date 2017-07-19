import React from 'react';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
import Sensei1 from '../Images/Sensei1.jpeg';
=======

>>>>>>> a46933e... [feat-26] [Splash] created with name input form

class Splash extends React.Component {
    render () {
        return (
            <div className="splash">
<<<<<<< HEAD
                <img src= {Sensei1} />
                <div>Welcome Student,<br />please enter your<br />ninja name below:</div>
                <br />
                <div>Welcome Student, please enter your ninja name below:</div>
                <form onSubmit="" >
                    <input className="input is-primary" type="text" placeholder="Your ninja name here" />
                    <Link to='/avatar'><button className="button is-primary">Submit</button></Link>
=======
                <div>Welcome Student, please enter your ninja name below:</div>
                <form onSubmit="" >
                    <input className="input is-primary" type="text" placeholder="Your ninja name here" />
                    <button className="button is-primary">Submit</button>
>>>>>>> a46933e... [feat-26] [Splash] created with name input form
                </form>
            </div>
        )
    }
}

export default Splash;