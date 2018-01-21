import React from 'react';
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';

const SortableItem = SortableElement(({value}) =>
  <div className="element">    
    <p className="subtitle">
      {value.title}
    </p>
  </div>
);

const SortableList = SortableContainer(({items}) => {
  return (
    <div className="sortable-container">
      {items.map((value, index) => (
        <SortableItem key={`item-${index}`} index={index} value={value} />
      ))}
    </div>
  );
});

class DraggableList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  };

  componentWillReceiveProps(nextProps) {
    this.setState({items: nextProps.elements});
  };

  onSortEnd = ({oldIndex, newIndex}) => {

    const sortedArray = arrayMove(this.state.items, oldIndex, newIndex).map((item, index) => { 
      item.display_order = index + 1
      return item
    })
    this.setState({
      items: sortedArray
    });
  };

  render() {
    return (
      <div>
        <div className="sortable-list">
          <SortableList items={this.state.items} onSortEnd={this.onSortEnd} />
        </div>
        <div className="field">
          <p className="control">
            <button onClick={() => {this.props.onClick(this.state.items) }} type="submit" className="button is-primary is-fullwidth">
            Submit
            </button>
          </p>
        </div>
      </div>
    )
  };
}

export default DraggableList;
