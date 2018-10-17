import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './WordCloudStyle.css';
import ReactTooltip from 'react-tooltip';

class WordCloudComponent extends Component {


    render() {
        return(
            <div className="container" style={this.props.width === 'auto' ? {width: '98.5%'}: {width: this.props.width}}>
                {this.props.data.length > 0 ? this.props.data.map((item,i)=>
                        <span key={i} style={{
                            color: this.props.color[Math.floor(Math.random()*100)%this.props.color.length],
                            fontSize: ''+Math.round(Math.log(item.value)*1.2)+'vmin',
                        }}>
                        <div data-tip={"Value: "+item.value}> {item.word} </div>
                            <ReactTooltip place="top" type="dark" effect="solid"/>
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
};
export default WordCloudComponent;
