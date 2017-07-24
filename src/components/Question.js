import React from 'react';
import PropTypes from 'prop-types';

class Question extends React.Component {
  constructor (props) {
        super(props);
        this.state = {
            questionIndex: 0
        };
        this.handleAnswer = this.handleAnswer.bind(this);
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
          <form onSubmit={this.handleAnswer}>
            <button className="button is-primary">{question.answers[0]}</button>
            <button className="button is-primary">{question.answers[1]}</button>
            <button className="button is-primary">{question.answers[2]}</button>
            <button className="button is-primary">{question.answers[3]}</button>
          </form>
      </div>
    );
  }
  handleAnswer (e) {
    e.preventDefault();
    // if correct answer clicked, next question renders
      if (e.target.innerHTML === this.props.question.correct) {
        this.setState({questionIndex: this.state.questionIndex++});
        this.props.redirect();
    }
  }
}

Question.propTypes = {
    question: PropTypes.object.isRequired
};

export default Question;