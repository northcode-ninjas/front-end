import React from 'react';
import { Link } from 'react-router-dom';

class Question extends React.Component {
  render () {
    return (
      <div className="question">
        <h3>1) Click the submit button.</h3>
        <Link to='/success'><button className="button is-primary is-outlined is-large">Submit</button></Link>
      </div>
    );
  }
}

export default Question;