import React from 'react';
// import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {fetchQuestions} from '../actions/questions';

import Question from '../components/Question';
import LevelUp from './LevelUp';

class Level extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      questionIndex: 0
    };
    this.handleCorrectAnswer = this.handleCorrectAnswer.bind(this);
  }

  componentWillReceiveProps (newProps) {
    if (this.props.match.params.level !== newProps.match.params.level) {
      this.props.fetchQuestions(newProps.match.params.level);
      this.setState({
        questionIndex: 0
      });
    }
  }

  componentDidMount () {
    const {level} = this.props.match.params;
    this.props.fetchQuestions(level);
  }

  render () {
    const questionIndex = this.state.questionIndex;
    const {loading, error, questions} = this.props;
    return (
      <div className="Level">
        {(error) && <p>{error}</p>}
        {(loading || questions.length === 0) && <p>Loading...</p>}
        {(!loading && questionIndex === questions.length && 
          <LevelUp 
            level={this.props.match.params.level}
            questionIndex={questionIndex}
          />
        )}
        {!loading && questions.length > 0 && questionIndex < questions.length && (
          <Question 
            question={questions[questionIndex]} 
            questionIndex={questionIndex} 
            handleCorrectAnswer={this.handleCorrectAnswer}
          />
        )}
      </div>
    );
  }
  handleCorrectAnswer () {
    this.setState({
      questionIndex: this.state.questionIndex + 1
    });
  }
}

function mapStateToProps (state) {
  return {
    loading: state.questions.loading,
    error: state.questions.error,
    questions: state.questions.data
  };
}

function mapDispatchToProps (dispatch) {
  return {
    fetchQuestions: (level) => {
      dispatch(fetchQuestions(level));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Level);