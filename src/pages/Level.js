import React from 'react';
// import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {fetchQuestions} from '../actions/questions';

class Level extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount () {
    this.props.fetchQuestions(this.props.match.params.level)
  }

  render () {
    const {loading, /*error, */questions} = this.props;
    return (
      <div className="Level">
        <h1>Level {this.props.match.params.level}</h1>
        {(loading || questions.length === 0) && <p>Loading...</p>}
        {!loading && questions.length > 0 && (
          <h2>Questions</h2>
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