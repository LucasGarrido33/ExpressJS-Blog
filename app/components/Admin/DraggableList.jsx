import React from 'react';
import {Motion, spring} from 'react-motion';
import range from 'lodash.range';
import {Col, Button } from 'react-bootstrap';

function reinsert(arr, from, to) {
  const itemFrom = Object.assign({}, arr.find(e => e.display_order === from), {display_order:to})
  const itemTo = Object.assign({}, arr.find(e => e.display_order === to), {display_order:from})
  const sortedArray = [...arr.filter(e => !(e.display_order === to || e.display_order === from)), itemFrom, itemTo];

  return sortedArray;
}

function clamp(n, min, max) {
  return Math.max(Math.min(n, max), min);
}
// rigité et amortissement
const springConfig = {stiffness: 300, damping: 50};

class DraggableList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      topDeltaY: 0,
      mouseY: 0,
      isPressed: false,
      selectedItemPos: 1,
      sortableArray: []
    };
  };

  componentDidMount() {
    window.addEventListener('touchmove', this.handleTouchMove);
    window.addEventListener('touchend', this.handleMouseUp);
    window.addEventListener('mousemove', this.handleMouseMove);
    window.addEventListener('mouseup', this.handleMouseUp);
  };
  componentWillUnmount() {
    window.removeEventListener('touchmove', this.handleTouchMove);
    window.removeEventListener('touchend', this.handleMouseUp);
    window.removeEventListener('mousemove', this.handleMouseMove);
    window.removeEventListener('mouseup', this.handleMouseUp);
  };

  componentWillReceiveProps(nextProps) {
    console.log(nextProps)
    this.setState({sortableArray: nextProps.elements});
  };

  handleTouchStart = (key, pressLocation, e) => {
    this.handleMouseDown(key, pressLocation, e.touches[0]);
  };

  handleTouchMove = (e) => {
    e.preventDefault();
    this.handleMouseMove(e.touches[0]);
  };

  handleMouseDown = (pos, pressY, {pageY}) => {
    this.setState({
      topDeltaY: pageY - pressY,
      mouseY: pressY,
      isPressed: true,
      selectedItemPos: pos
    });
  };

  handleMouseMove = ({pageY}) => {
    const {sortableArray, selectedItemPos, isPressed, topDeltaY} = this.state;

    if (isPressed) {
      const mouseY = pageY - topDeltaY;
      const currentRow = clamp(Math.round(mouseY / 100), 0, sortableArray.length - 1) + 1;
      let newOrder = sortableArray;
      if (currentRow !== selectedItemPos){
         newOrder = reinsert(sortableArray, selectedItemPos, currentRow);
         this.setState({selectedItemPos: currentRow,  sortableArray: newOrder});
      }

      this.setState({mouseY: mouseY});
    }
  };

  handleMouseUp = () => {
    this.setState({isPressed: false, topDeltaY: 0});
  };

  render() {

    const {sortableArray, selectedItemPos, mouseY, isPressed} = this.state;
    return (
      <div>
        <div className="demo8" style={{height: sortableArray.length * 100}}>
        {sortableArray.map((item, i) => {
          const style = selectedItemPos === item.display_order  && isPressed
            ? {
                scale: spring(1.1, springConfig),
                shadow: spring(16, springConfig),
                y: mouseY
              }
            : {
                scale: spring(1, springConfig),
                shadow: spring(1, springConfig),
                y: spring((item.display_order - 1) * 100, springConfig),
              };
          return (
            <Motion style={style} key={item.id}>
              {({scale, shadow, y}) =>
                <div
                  onMouseDown={this.handleMouseDown.bind(null, item.display_order, y)}
                  onTouchStart={this.handleTouchStart.bind(null, item.display_order, y)}
                  className="demo8-item"
                  style={{
                    boxShadow: `rgba(0, 0, 0, 0.2) 0px ${shadow}px ${2 * shadow}px 0px`,
                    transform: `translate3d(0, ${y}px, 0) scale(${scale})`,
                    WebkitTransform: `translate3d(0, ${y}px, 0) scale(${scale})`,
                    zIndex: item.display_order === selectedItemPos ? 99 : item.display_order,
                  }}>
                  {item.title + ' ' + item.display_order}
                  {/* {<img width="50" src={require('../../uploads/' + item['thumbnail'])}/> } */}
                </div>
              }
            </Motion>

          );
        })}
        </div>
        <Button onClick={() => {this.props.onClick(this.state.sortableArray) }} type="submit" block bsStyle="info">Submit</Button>
      </div>

    );
  };
}

export default DraggableList;
