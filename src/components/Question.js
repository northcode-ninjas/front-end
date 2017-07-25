import React from 'react';
import PropTypes from 'prop-types';

class Question extends React.Component {
  constructor (props) {
        super(props);
    }
  render () {
    const {question} = this.props;
    return (
      <div className="question">
          <h2>Sensei Says: {question.title}</h2>
          <span>{question.background}</span><br />
          <span>{question.example}</span><br />
          <hr />
          <h3>{question.question}</h3>

          <div className="answers">
            {question.answers.map((answer, i) => {
              const handler = answer === question.correct ? this.props.handleCorrectAnswer : () => {}
              return (
                <button key={i} className="button is-primary" onClick={handler}>
                  {answer}
                </button>
              )
            })}
          </div>
      </div>
    );
  }
}

Question.propTypes = {
    question: PropTypes.object.isRequired,
    questionIndex: PropTypes.number.isRequired,
    handleCorrectAnswer: PropTypes.func.isRequired
};

export default Question;