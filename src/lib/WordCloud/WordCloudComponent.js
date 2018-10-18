import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './WordCloudStyle.css';
import ReactTooltip from 'react-tooltip';

class WordCloudComponent extends Component {

    constructor(props) {
        super(props);
        this.state={
            fontSizer: [],
            maxFont: 40,
            minFont: 10,
        };
        this.handleFontSize = this.handleFontSize.bind(this);
    }
    //all font sizes are in px;
    handleFontSize() {
        // set max font size
            this.setState({
                maxFont: this.props.maxFont ? this.props.maxFont : 40,
                minFont: this.props.minFont ? this.props.minFont : 10,
            },()=>{
                // console.log(this.state);
                //checking if length is not zero
                if(this.props.data.length !== 0) {
                    //if contains more than 1 word
                    if(this.props.data.length > 1){
                        //work need to do
                        const ValueDifference = this.props.data[0].value- this.props.data[this.props.data.length-1].value;
                        const PxDifference = this.state.maxFont - this.state.minFont;
                        // console.log(ValueDifference,PxDifference);
                        // console.log(this.props.data);
                        this.props.data.map((item)=>{
                            const ItemValueDifference = this.props.data[0].value - item.value === 0 ? 1: this.props.data[0].value - item.value;
                            let NewFontSize = this.state.maxFont-((PxDifference / ValueDifference)*ItemValueDifference);

                            //get state value for fontSizer;
                            let localFontSizer = this.state.fontSizer;
                            localFontSizer.push(NewFontSize);
                            this.setState({
                                fontSizer : localFontSizer
                            });
                            return item;
                        });
                    }else {
                        //else set max value to the one word.
                        this.setState({
                            fontSizer: [this.props.maxFont],
                        });
                    }
                }
            });



        // console.log(this.state);
    }
    componentWillMount() {
        // console.log(this.props);
        this.handleFontSize();
    }
    render() {
        return(
            <div className="container-react-word-cloud" style={this.props.width === 'auto' ? {width: '98.5%'}: {width: this.props.width}}>
                {this.props.data.length > 0 ? this.props.data.map((item,i)=>
                        <span key={i} style={{
                            color: this.props.color[Math.floor(Math.random()*100)%this.props.color.length],
                            fontSize: this.props.logFunc ? this.props.logFunc(item.value) : this.state.fontSizer[i],
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
    maxFont: PropTypes.number,
    minFont: PropTypes.number
};
export default WordCloudComponent;
