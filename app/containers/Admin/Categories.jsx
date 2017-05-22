import React, { Component } from 'react';
import CategoryList from '../../components/Admin/CategoryList';
import {connect} from 'react-redux';
import {deleteCategory} from '../../actions/categoryActions';

class Categories extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    const categories = this.props.categories;
    return (
      <CategoryList categories={categories} onDeleteCategory={this.props.onDeleteClick}/>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDeleteClick: (category) => {
      dispatch(deleteCategory(category));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
