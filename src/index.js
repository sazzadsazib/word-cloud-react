import React from 'react';
import { render } from "react-dom";
import './MainStyle.css';
import { WordCloud } from "./lib";

class App extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            WordCloudData : [{"value":1811,"word":"hey"},{"value":486,"word":"service"},{"value":433,"word":"recipe"},{"value":390,"word":"feature"},{"value":280,"word":"item"},{"value":277,"word":"type"},{"value":275,"word":"gt"},{"value":190,"word":"soup"},{"value":173,"word":"value"},{"value":152,"word":"yes"},{"value":132,"word":"noodles"},{"value":121,"word":"chicken"},{"value":113,"word":"details"},{"value":100,"word":"knorr"},{"value":94,"word":"mix"},{"value":93,"word":"crispy"},{"value":92,"word":"topic"},{"value":89,"word":"fry"},{"value":80,"word":"you"},{"value":78,"word":"nice"},{"value":65,"word":"subscription"},{"value":61,"word":"thanks"},{"value":52,"word":"না"},{"value":49,"word":"hi"},{"value":49,"word":"order"},{"value":47,"word":"food"},{"value":46,"word":"help"},{"value":46,"word":"my"},{"value":45,"word":"na"},{"value":42,"word":"https"},{"value":42,"word":"ok"},{"value":42,"word":"your"},{"value":40,"word":"have"},{"value":40,"word":"online"},{"value":40,"word":"আমি"},{"value":39,"word":"home"},{"value":38,"word":"can"},{"value":37,"word":"subscribe"},{"value":37,"word":"want"},{"value":36,"word":"get"},{"value":36,"word":"me"},{"value":36,"word":"আপনাদের"},{"value":33,"word":"er"},{"value":33,"word":"feedback"},{"value":33,"word":"like"},{"value":33,"word":"price"},{"value":32,"word":"search"},{"value":31,"word":"how"},{"value":30,"word":"আমার"},{"value":29,"word":"available"},{"value":29,"word":"cup"},{"value":29,"word":"do"},{"value":28,"word":"bangladesh"},{"value":28,"word":"please"},{"value":27,"word":"consumer"},{"value":27,"word":"এই"},{"value":26,"word":"আছে"},{"value":25,"word":"need"},{"value":25,"word":"repetition"},{"value":25,"word":"weekly"},{"value":24,"word":"apnader"},{"value":24,"word":"careline"},{"value":24,"word":"why"},{"value":23,"word":"pawa"},{"value":23,"word":"এর"},{"value":23,"word":"চাই"},{"value":22,"word":"করতে"},{"value":22,"word":"করে"},{"value":21,"word":"hello"},{"value":21,"word":"shop"},{"value":21,"word":"thank"},{"value":20,"word":"nc"},{"value":20,"word":"products"},{"value":19,"word":"bn"},{"value":19,"word":"jay"},{"value":19,"word":"plz"},{"value":19,"word":"product"},{"value":19,"word":"started"},{"value":19,"word":"wow"},{"value":19,"word":"আর"},{"value":18,"word":"am"},{"value":18,"word":"ও"},{"value":18,"word":"হয়"},{"value":17,"word":"our"},{"value":17,"word":"sir"},{"value":17,"word":"thai"},{"value":17,"word":"where"},{"value":17,"word":"আমাদের"},{"value":17,"word":"জন্য"},{"value":16,"word":"any"},{"value":16,"word":"from"},{"value":16,"word":"give"},{"value":16,"word":"jabe"},{"value":16,"word":"know"},{"value":16,"word":"kothay"},{"value":16,"word":"এটা"},{"value":16,"word":"কথা"},{"value":16,"word":"কিছু"},{"value":16,"word":"থেকে"},{"value":16,"word":"হবে"}]
        }
    }
    render() {
        return(
            <div>
               <WordCloud width={"auto"} data={this.state.WordCloudData} clickEvent={(x)=>console.log(x.word)} color={['#71803F', '#F8AC1D','#598EC0','#E2543E','#1A3051','#F46F73','#8A87BB','#56CFCD','#297373','#FF8552','#F2E863','#C2F8CB','#3A6EA5','#FF6700','#C0C0C0','#4E4381','#523CBD',]}/>
            </div>
        )
    }
}

render(<App />, document.getElementById("root"));
