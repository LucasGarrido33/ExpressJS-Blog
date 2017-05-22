import React, { Component } from 'react';
import CategoryForm from '../../components/Admin/CategoryForm';
import {connect} from 'react-redux';
import {createCategory} from '../../actions/categoryActions';

class NewCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: {
        name: ''
      }
    };
    this.updateCategoryState = this.updateCategoryState.bind(this);

  }

  updateCategoryState(event) {
    const field = event.target.name;
    const category = this.state.category;
    category[field] = event.target.value;
    return this.setState({category: category});
  }

  render() {
    return (
      <CategoryForm onChange={this.updateCategoryState} onSubmit={this.props.onCreateClick} category={this.state.category}/>
    );
  }
}

  const mapDispatchToProps = (dispatch) => {
    return {
      onCreateClick: (category) => {
        dispatch(createCategory(category));
      }
    };
  };

export default connect(null, mapDispatchToProps)(NewCategory);
