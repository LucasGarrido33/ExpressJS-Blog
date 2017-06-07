import React, { Component } from 'react';
import CategoryForm from '../../components/Admin/CategoryForm';
import {connect} from 'react-redux';
import {createCategory} from '../../actions/categoryActions';
import {browserHistory } from 'react-router';

class NewCategory extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <CategoryForm onSubmit={this.props.onCreateClick} />
    );
  }
}

  const mapDispatchToProps = (dispatch) => {
    return {
      onCreateClick: (category) => {
        dispatch(createCategory(category));
        browserHistory.push('/admin/categories');
      }
    };
  };

export default connect(null, mapDispatchToProps)(NewCategory);
