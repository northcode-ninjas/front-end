import React from 'react';
import { Link } from 'react-router-dom';

class Success extends React.Component {
  render () {
    return (
      <div className="Success">
        <h3>Congratulations! You are a code ninja!</h3>
<<<<<<< HEAD
        <Link to='/question'><button className="button is-primary is-outlined is-large">Continue</button></Link>
=======
        <Link to='/question'><button className="button is-primary is-outlined is-large">Submit</button></Link>
>>>>>>> db87ce2... [feat26] [Question] renders hard-coded questions data
      </div>
    );
  }
}

export default Success;