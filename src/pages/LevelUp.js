import React from 'react';
import { Link } from 'react-router-dom';
import ninjaStar from '../../public/Images/ninja-throwing-star.jpg';
import axios from 'axios';
import {ROOT} from '../../config';

const levelNames = ['Academy', 'Gennin', 'Chunnin', 'Jounin', 'Special Jounin', 'Kage', 'ANBU', 'S-Class', 'Ninja'];


class LevelUp extends React.Component {
    componentDidMount() {
        axios.put (`${ROOT}/users/${this.props.username}/level-up`)
            .then(() => {
                this.setState(this.props.questionIndex = 0);
            });
        console.log(this.props.questionIndex);
        // we want to set questionIndex in Level.js to 0 here!!
        // we also want to increment user.level
    }
    render () {
        return (
            <div className="levelUp">
                <img width="50%" src= {ninjaStar} />
                <span>Well done, student! Your {levelNames[this.props.level]} training is complete!</span>
                <span>Press Graduate to begin Level {(+this.props.level) + 2}: {levelNames[+this.props.level + 1]}</span>
                <Link to={`/levels/${+this.props.level+1}/questions`}><button className="button is-primary is-outlined is-large"> Graduate</button></Link>
                <Link to='/avatar'><button className="button is-primary is-outlined is-large"> Back</button></Link>
              
            </div>
        );
    }
}

export default LevelUp;

