import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {updateCategory} from '../../actions/categoryActions';
import {browserHistory } from 'react-router';

import CategoryForm from '../../components/Admin/CategoryForm';

class EditCategory extends Component {
  constructor(props) {
    super(props);
  }

    render() {
      return (
        <CategoryForm edit={true} onSubmit={this.props.onEditClick } initialValues={this.props.category}/>
      );
    }
  }

  EditCategory.propTypes = {
    params: PropTypes.shape({
      categoryId: PropTypes.string.isRequired
    })
  };

  const mapStateToProps = (state, ownProps) => {
    let category = {name: ''};
    const categoryId = ownProps.params.categoryId;
    if (state.categories.length > 0) {
      category = Object.assign({}, state.categories.find(category => category.id == categoryId));
    }
    return {category: category};
  };

  const mapDispatchToProps = (dispatch) => {
    return {
      onEditClick: (category) => {
        dispatch(updateCategory(category));
        browserHistory.push('/admin/categories');
      }
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(EditCategory);
