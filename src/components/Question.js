import React from 'react';
// import PropTypes from 'prop-types';
import {connect} from 'react-redux';

class Question extends React.Component {
  render () {
    // const {question, loading} = this.props;
    return (
      <div className="question">
          <h2>Sensei Says: title</h2>
          <span>explanation</span><br />
          <span>example</span><br />
          <hr />
          <h3>question</h3>
          <button className="button is-primary is-outlined is-large">answers[0]</button>
          <button className="button is-primary is-outlined is-large">answers[1]</button>
          <button className="button is-primary is-outlined is-large">answers[2]</button>
          <button className="button is-primary is-outlined is-large">answers[3]</button>
      </div>
    );
  }
}

Question.propTypes = {
    
};

function mapStateToProps (/*state*/) {
    return {
    };
}

export default connect(mapStateToProps)(Question);