import React from 'react';
import { Link } from 'react-router-dom';

const questions = {
    Academy: [
      {
        title: 'What\'s Data?',
        explanation: 'Data is information that the computer can use. We will go through 3 in the example',
        example: 'String: any words or numbers in quote marks, eg \'hello\' or "hello", Number:any numbers with no quote marks, eg 23, 65, 1.5, Boolean: either true or false with no quote marks, eg, true or false',
        question: 'Choose the string',
        answers: ['"Coding"', 34, 'true', 'name'],
        correct: 'Coding'
      },
      {
        title: 'What\'s Data?',
        explanation: 'Data is information that the computer can use. We will go through 3 in the example',
        example: 'String: any words or numbers in quote marks, eg \'hello\' or "hello", Number:any numbers with no quote marks, eg 23, 65, 1.5, Boolean: either true or false with no quote marks, eg, true or false',
        question: 'Choose the number',
        answers: ['"Coding"', 34, 'true', 'name'],
        correct: 34
      }
    ]
};

class Question extends React.Component {
  render () {
    return (
      <div className="question">
        <div>
          <h2>Sensei Says: {questions.Academy[0].title}</h2>
          <span>{questions.Academy[0].explanation}</span><br />
          <span>{questions.Academy[0].example}</span><br />
          <h3>{questions.Academy[0].question}</h3>
          <Link to='/#'><button className="button is-primary is-outlined is-large">{questions.Academy[0].answers[0]}</button></Link>
          <Link to='/#'><button className="button is-primary is-outlined is-large">{questions.Academy[0].answers[1]}</button></Link>
          <Link to='/success'><button className="button is-primary is-outlined is-large">{questions.Academy[0].answers[2]}</button></Link>
          <Link to='/#'><button className="button is-primary is-outlined is-large">{questions.Academy[0].answers[3]}</button></Link>
        </div>
            <div>
            <h2>{questions.Academy[0].title}</h2>
            <span>{questions.Academy[0].explanation}</span><br />
            <span>{questions.Academy[0].example}</span><br />
            <h3>{questions.Academy[0].question}</h3>
            <form>
            <label className="radio"><input type="radio" name="answer0" />{questions.Academy[0].answers[0]}</label><br />
            <label className="radio"><input type="radio" name="answer1" />{questions.Academy[0].answers[1]}</label><br />
            <label className="radio"><input type="radio" name="answer2" />{questions.Academy[0].answers[2]}</label><br />
            <label className="radio"><input type="radio" name="answer3" />{questions.Academy[0].answers[3]}</label>
            </form>
            <Link to='/success'><button className="button is-primary is-outlined is-large">Submit</button></Link>
            </div>
      </div>
    );
  }
}

export default Question;