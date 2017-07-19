import React from 'react';


class Splash extends React.Component {
    render () {
        return (
            <div className="splash">
                <div>Welcome Student, please enter your ninja name below:</div>
                <form onSubmit="" >
                    <input className="input is-primary" type="text" placeholder="Your ninja name here" />
                    <button className="button is-primary">Submit</button>
                </form>
            </div>
        )
    }
}

export default Splash;