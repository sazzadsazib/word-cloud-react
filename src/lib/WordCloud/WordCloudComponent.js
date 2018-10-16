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
                            fontSize:
                                item.value > 10000 ? '100px' :
                                    item.value > 9000 ? '95px' :
                                        item.value > 7000 ? '90px' :
                                        item.value > 5000 ? '85px' :
                                            item.value > 3000 ? '80px' :
                                                item.value > 2000 ? '75px' :
                                                    item.value > 1000 ? '70px' :
                                                        item.value > 800 ? '65px' :
                                                            item.value > 500 ? '60px' :
                                                                item.value > 400 ? '55px' :
                                                                    item.value > 300 ? '50px' :
                                                                        item.value > 200 ? '45px' :
                                                                            item.value > 100 ? '40px' :
                                                                                item.value > 90 ? '35px' :
                                                                                    item.value > 80 ? '30px' :
                                                                                        item.value > 70 ? '28px' :
                                                                                            item.value > 60 ? '26px' :
                                                                                                item.value > 50 ? '24px' :
                                                                                                    item.value > 30 ? '22px' :
                                                                                                        item.value > 20 ? '20px' :
                                                                                                            item.value > 10 ? '18px' : "16px"
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
