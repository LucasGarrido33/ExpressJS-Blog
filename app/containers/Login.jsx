import React, { Component } from 'react';
import {logInUser} from '../actions/sessionActions';

import {connect} from 'react-redux';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {credentials: {password: ''}};
    this.onChange = this.onChange.bind(this);
    this.onSave = this.onSave.bind(this);
  }

  onChange(event) {
    const field = event.target.name;
    const credentials = this.state.credentials;
    credentials[field] = event.target.value;
    return this.setState({credentials: credentials});
  }

  onSave(event) {
    event.preventDefault();
    this.props.logInUser(this.state.credentials);
  }

  render() {
    return (
      <div>
        <form>
          <input
            name="password"
            label="password"
            type="password"
            value={this.state.credentials.password}
            onChange={this.onChange}/>

          <input
            type="submit"
            className="btn btn-primary"
            onClick={this.onSave}/>
        </form>

      </div>
        );
      }
    }

    const mapDispatchToProps = (dispatch) => {
      return {
        logInUser: (credentials) => {
          dispatch(logInUser(credentials));
        }
      };
    };

    export default connect(null, mapDispatchToProps)(Login);
