import React from 'react';
// import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {fetchQuestions} from '../actions/questions';

import Question from '../components/Question';

class Level extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount () {
    const {level} = this.props.match.params;
    console.log({level})
    this.props.fetchQuestions(level)
  }

  render () {
    const {loading, /*error, */questions} = this.props;
    return (
      <div className="Level">
        <h1>Level {this.props.match.params.level}</h1>
        {(loading || questions.length === 0) && <p>Loading...</p>}
        {!loading && questions.length > 0 && (
          <Question question={questions[0]} />
        )}
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    loading: state.questions.loading,
    error: state.questions.error,
    questions: state.questions.data
  }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchQuestions: (level) => {
      dispatch(fetchQuestions(level));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Level);