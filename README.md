# Word Cloud React &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/sazzadsazib/cohort-react-graph/blob/master/LICENSE)
A library of to show React cohort graph
## Installation
Run the following command:
`npm start`

## How to use:
Install Package<br/>
``npm i word-cloud-react --save``
<br/><br/>
import in your react component: <br/>
``import { WordCloud } from "word-cloud-react";``
<br/><br/>
Use it as:
`` <WordCloud
        width={"auto"} 
        data={
        [{"value":1811,"word":"hey"},{"value":486,"word":"service"},{"value":433,"word":"recipe"},{"value":390,"word":"feature"},{"value":280,"word":"item"},{"value":277,"word":"type"}]
        }  
        color={['#71803F', '#F8AC1D','#598EC0','#E2543E','#1A3051','#F46F73','#8A87BB','#56CFCD','#297373','#FF8552','#F2E863','#C2F8CB','#3A6EA5','#FF6700','#C0C0C0','#4E4381','#523CBD',]}/>``
        

### Props:
 ``width: auto | number , PropType: String | Integer``<br/><br/>
 ``data: [{"value": 100, "word": "hi},{"value": 150, "word": "hello}] , PropType: Array``<br/><br/>
 ``color: ['#71803F', '#F8AC1D'] , PropType: Array``<br/><br/>
 ``clickEvent={(x)=>console.log(x.word)}``

### Color Schemes:
``color={['#71803F', '#F8AC1D','#598EC0','#E2543E','#1A3051','#F46F73','#8A87BB','#56CFCD','#297373','#FF8552','#F2E863','#C2F8CB','#3A6EA5','#FF6700','#C0C0C0','#4E4381','#523CBD',]``
<br/>
Please visit: `https://coolors.co` to generate your color theme for word cloud. More you add color to the array more different color will appear randomly
