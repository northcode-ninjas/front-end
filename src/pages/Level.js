import React from 'react';
// import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {fetchQuestions} from '../actions/questions';

import Question from '../components/Question';

const levelNames = ['Academy', 'Gennin', 'Chunnin', 'Jounin', 'Special Jounin', 'Kage', 'ANBU', 'S-Class', 'Ninja'];


class Level extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      questionIndex: 0
    };
    this.handleCorrectAnswer = this.handleCorrectAnswer.bind(this);
  }
  componentDidMount () {
    const {level} = this.props.match.params;
    this.props.fetchQuestions(level)
  }

  render () {
    const questionIndex = this.state.questionIndex;
    const {loading, error, questions} = this.props;
    return (
      <div className="Level">
        <h1> Current level: {levelNames[this.props.match.params.level]}</h1>
        {(error) && <p>{error}</p>}
        {(loading || questions.length === 0) && <p>Loading...</p>}
        {!loading && questions.length > 0 && (
          <Question 
            question ={questions[questionIndex]} 
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