import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './WordCloudStyle.css';
import ReactTooltip from 'react-tooltip';

class WordCloudComponent extends Component {


    render() {
        return(
            <div className="container-react-word-cloud" style={this.props.width === 'auto' ? {width: '98.5%'}: {width: this.props.width}}>
                {this.props.data.length > 0 ? this.props.data.map((item,i)=>
                        <span key={i} style={{
                            color: this.props.color[Math.floor(Math.random()*100)%this.props.color.length],
                            fontSize: Math.log2(item.value) * 5,
                        }}>
                        <div data-tip={"Value: "+item.value} data-event='click focus' onClick={()=>this.props.clickEvent ? this.props.clickEvent(item) : ''}> {item.word} </div>
                            <ReactTooltip place="top" type="dark" effect="solid" globalEventOff='click'/>
                        </span>
                ) : <span>No Data</span>}
            </div>
        )
    }
}
WordCloudComponent.propTypes = {
    width: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
    data: PropTypes.array,
    color: PropTypes.array,
    clickEvent: PropTypes.func,
};
export default WordCloudComponent;
