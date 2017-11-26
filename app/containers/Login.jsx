import React, { Component } from 'react';
import {logInUser} from '../actions/sessionActions';
import LoginForm from '../components/Admin/LoginForm';
import {connect} from 'react-redux';
import { SubmissionError } from 'redux-form';
import { browserHistory } from 'react-router';

class Login extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (this.props.loggedIn) {
      browserHistory.push('/admin');
    }
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <div className="section hero is-fullheight is-light">
        <div className="container">
          <div className="columns">
            <div className="column is-4 is-offset-4">
              <div className="login">
              <LoginForm onSubmit={this.props.logInUser}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {loggedIn : state.session};
};

const mapDispatchToProps = (dispatch) => {
  return {
    logInUser: (credentials) => {
      return dispatch(logInUser(credentials))
      .then(
        () => { browserHistory.push('/admin'); })
        .catch((error) => {
          throw new SubmissionError({
            password: error.message,
            _error: 'Login failed!'});
          });
        }
      };
    };

    export default connect(mapStateToProps, mapDispatchToProps)(Login);
