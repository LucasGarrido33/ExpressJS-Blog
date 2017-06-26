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
    document.body.classList.toggle('login');
  }

  componentWillUnmount() {
    document.body.classList.remove('login');
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="test">
            <LoginForm onSubmit={this.props.logInUser}/>
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
