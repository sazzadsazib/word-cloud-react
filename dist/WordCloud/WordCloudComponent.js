import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import React, { Component } from 'react';
import './WordCloudStyle.css';
import ReactTooltip from 'react-tooltip';

var WordCloudComponent =
/*#__PURE__*/
function (_Component) {
  _inherits(WordCloudComponent, _Component);

  function WordCloudComponent(props) {
    var _this;

    _classCallCheck(this, WordCloudComponent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(WordCloudComponent).call(this, props));
    _this.state = {
      fontSizer: [],
      maxFont: 40,
      minFont: 10
    };
    _this.handleFontSize = _this.handleFontSize.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  } //all font sizes are in px;


  _createClass(WordCloudComponent, [{
    key: "handleFontSize",
    value: function handleFontSize() {
      var _this2 = this;

      // set max font size
      this.setState({
        maxFont: this.props.maxFont ? this.props.maxFont : 40,
        minFont: this.props.minFont ? this.props.minFont : 10
      }, function () {
        // console.log(this.state);
        //checking if length is not zero
        if (_this2.props.data.length !== 0) {
          //if contains more than 1 word
          if (_this2.props.data.length > 1) {
            //work need to do
            var ValueDifference = _this2.props.data[0].value - _this2.props.data[_this2.props.data.length - 1].value;
            var PxDifference = _this2.state.maxFont - _this2.state.minFont; // console.log(ValueDifference,PxDifference);
            // console.log(this.props.data);

            _this2.props.data.map(function (item) {
              var ItemValueDifference = _this2.props.data[0].value - item.value === 0 ? 1 : _this2.props.data[0].value - item.value;
              var NewFontSize = _this2.state.maxFont - PxDifference / ValueDifference * ItemValueDifference; //get state value for fontSizer;

              var localFontSizer = _this2.state.fontSizer;
              localFontSizer.push(NewFontSize);

              _this2.setState({
                fontSizer: localFontSizer
              });

              return item;
            });
          } else {
            //else set max value to the one word.
            _this2.setState({
              fontSizer: [_this2.props.maxFont]
            });
          }
        }
      }); // console.log(this.state);
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      // console.log(this.props);
      this.handleFontSize();
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

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
            color: _this3.props.color[Math.floor(Math.random() * 100) % _this3.props.color.length],
            fontSize: _this3.props.logFunc ? _this3.props.logFunc(item.value) : _this3.state.fontSizer[i]
          }
        }, React.createElement("div", {
          "data-tip": "Value: " + item.value,
          "data-event": "click focus",
          onClick: function onClick() {
            return _this3.props.clickEvent ? _this3.props.clickEvent(item) : '';
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
