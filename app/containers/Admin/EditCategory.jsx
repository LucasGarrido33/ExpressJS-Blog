import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {updateCategory} from '../../actions/categoryActions';

import CategoryForm from '../../components/Admin/CategoryForm';

class EditCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: this.props.category
    };
    this.updateCategoryState = this.updateCategoryState.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.category.id != nextProps.category.id) {
      this.setState({category: nextProps.category});
    }
  }

  updateCategoryState(event) {
    const field = event.target.name;
    const category = this.state.category;
    category[field] = event.target.value;
    return this.setState({category: category});
  }

    render() {
      return (
        <CategoryForm edit={true} onSubmit={this.props.onEditClick } onChange={this.updateCategoryState} category={this.props.category}/>
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
      }
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(EditCategory);
