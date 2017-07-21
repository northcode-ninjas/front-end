import React from 'react';

import LogInForm from '../components/LogInForm';

import sensei from '../Images/Sensei1.jpeg';

class Home extends React.Component {
    render () {
        return (
            <div className="Home">
                <img src= {sensei} />
                <p>Welcome Student,<br />please enter your<br />ninja name below:</p>
                <br />
                <LogInForm />
            </div>
        );
    }
}

export default Home;