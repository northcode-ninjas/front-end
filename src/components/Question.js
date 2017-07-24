import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

class Question extends React.Component {
  render () {
    const {question} = this.props;
    return (
      <div className="question">
          <h2>Sensei Says: {question.title}</h2>
          <span>question.background</span><br />
          <span>question.example</span><br />
          <hr />
          <h3>question.question</h3>
          <button className="button is-primary is-outlined is-large">question.answers[0]</button>
          <button className="button is-primary is-outlined is-large">question.answers[1]</button>
          <button className="button is-primary is-outlined is-large">question.answers[2]</button>
          <button className="button is-primary is-outlined is-large">question.answers[3]</button>
      </div>
    );
  }
}

Question.propTypes = {
    question: PropTypes.object.isRequired
};

function mapStateToProps (/*state*/) {
    return {
    };
}

export default connect(mapStateToProps)(Question);