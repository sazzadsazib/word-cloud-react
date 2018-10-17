import _classCallCheck from "/Users/sazzadsazib/Desktop/Work/Front-end/PackageBuild/word-cloud-react/node_modules/@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "/Users/sazzadsazib/Desktop/Work/Front-end/PackageBuild/word-cloud-react/node_modules/@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "/Users/sazzadsazib/Desktop/Work/Front-end/PackageBuild/word-cloud-react/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "/Users/sazzadsazib/Desktop/Work/Front-end/PackageBuild/word-cloud-react/node_modules/@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "/Users/sazzadsazib/Desktop/Work/Front-end/PackageBuild/word-cloud-react/node_modules/@babel/runtime/helpers/esm/inherits";
import React, { Component } from 'react';
import './WordCloudStyle.css';
import ReactTooltip from 'react-tooltip';

var WordCloudComponent =
/*#__PURE__*/
function (_Component) {
  _inherits(WordCloudComponent, _Component);

  function WordCloudComponent() {
    _classCallCheck(this, WordCloudComponent);

    return _possibleConstructorReturn(this, _getPrototypeOf(WordCloudComponent).apply(this, arguments));
  }

  _createClass(WordCloudComponent, [{
    key: "render",
    value: function render() {
      var _this = this;

      return React.createElement("div", {
        className: "container-react-word-cloud",
        style: this.props.width === 'auto' ? {
          width: '98.5%'
        } : {
          width: this.props.width
        }
      }, this.props.data.length > 0 ? this.props.data.map(function (item, i) {
        return React.createElement("span", {
          key: i,
          style: {
            color: _this.props.color[Math.floor(Math.random() * 100) % _this.props.color.length],
            fontSize: Math.log2(item.value) * 5
          }
        }, React.createElement("div", {
          "data-tip": "Value: " + item.value,
          "data-event": "click focus",
          onClick: function onClick() {
            return _this.props.clickEvent ? _this.props.clickEvent(item) : '';
          }
        }, " ", item.word, " "), React.createElement(ReactTooltip, {
          place: "top",
          type: "dark",
          effect: "solid",
          globalEventOff: "click"
        }));
      }) : React.createElement("span", null, "No Data"));
    }
  }]);

  return WordCloudComponent;
}(Component);

export default WordCloudComponent;