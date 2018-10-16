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
        className: "container",
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
            fontSize: item.value > 10000 ? '100px' : item.value > 9000 ? '95px' : item.value > 7000 ? '90px' : item.value > 5000 ? '85px' : item.value > 3000 ? '80px' : item.value > 2000 ? '75px' : item.value > 1000 ? '70px' : item.value > 800 ? '65px' : item.value > 500 ? '60px' : item.value > 400 ? '55px' : item.value > 300 ? '50px' : item.value > 200 ? '45px' : item.value > 100 ? '40px' : item.value > 90 ? '35px' : item.value > 80 ? '30px' : item.value > 70 ? '28px' : item.value > 60 ? '26px' : item.value > 50 ? '24px' : item.value > 30 ? '22px' : item.value > 20 ? '20px' : item.value > 10 ? '18px' : "16px"
          }
        }, React.createElement("div", {
          "data-tip": "Value: " + item.value
        }, " ", item.word, " "), React.createElement(ReactTooltip, {
          place: "top",
          type: "dark",
          effect: "solid"
        }));
      }) : React.createElement("span", null, "No Data"));
    }
  }]);

  return WordCloudComponent;
}(Component);

export default WordCloudComponent;