import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

const levelNames = ['Academy', 'Gennin', 'Chunnin', 'Jounin', 'Special Jounin', 'Kage', 'ANBU', 'S-Class', 'Ninja'];

class UserProfile extends React.Component {
    render () {
        const {user, loading, error} = this.props.auth;
        return (
            <div>
                {loading && <p>Loading...</p>}
                {error && (
                    // Redirect to 404 page
                    <div>{error.message}</div>
                )}
                {user && (
                    <div className="UserProfile">
                        <h1 className="title is-1">{user.username}</h1>
                        <h2>Current level: {levelNames[user.level]}</h2>
                        <Link className="button is-success" to={`/levels/${user.level}`}>Train</Link>
                    </div>
                )}
            </div>
        );
    }
}

UserProfile.propTypes = {
    auth: PropTypes.shape({
        loading: PropTypes.bool.isRequired,
        error: PropTypes.any,
        user: PropTypes.any
    })
};

function mapStateToProps (state) {
    return {
        auth: state.auth
    };
}

export default connect(mapStateToProps)(UserProfile);