# Word Cloud React &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/sazzadsazib/word-cloud-react/blob/master/LICENSE) [![GitHub license](https://img.shields.io/badge/word--cloud--react-0.1.7-green.svg)](https://github.com/sazzadsazib/word-cloud-react/blob/master/LICENSE) 
A library of to show Word Cloud in ReactJs
![alt tag](https://github.com/sazzadsazib/word-cloud-react/blob/master/Docs/word%20cloud%20react.png)

## Getting Started

To install the package run command.
<br/>
```npm i word-cloud-react --save``` 
<br/>
or using yarn <br/>
```yarn add word-cloud-react```
<br/>
import the packages to your react Component, <br/>
```import { WordCloud } from "word-cloud-react";```
<br/>
Use the component as: 
```
<WordCloud 
            width={"auto"} 
            maxFont={40} 
            minFont={10} 
            logFunc={(x)=> Math.log2(x) * 5} 
            data={[{"word":"gt feature recipe","value":275},{"word":"searchknorrproduct service feature","value":275},.......]} 
            clickEvent={(x)=>console.log(x.word)} 
            color={['#71803F', '#F8AC1D','#598EC0','#E2543E','#1A3051','#F46F73','#8A87BB','#56CFCD','#297373','#FF8552','#F2E863','#C2F8CB','#3A6EA5','#FF6700','#C0C0C0','#4E4381','#523CBD',]}/>
```
<br/>

### Props

There are different conditional Props available in this component, they are, <br/>

|Name |Type|Sample| Required | Description |
|---|---|---|---|---|
|`width`| `"auto"` or `any integer`|`width={"auto"}` or `width={600}`| `true` | The width of the word cloud
|`maxFont`|`integer`|` maxFont={40} ` | `false` , `default : 40` | Max Font size for font sizing algorithm for the max value
|`minFont`|`integer`|` minFont={10} ` | `false` , `default : 10` | Min Font size for font sizing algorithm for the min value
|`logFunc`|`function`|` logFunc={(x)=> Math.log2(x) * 5} ` | `false` , if **logfunction** not provided than **maxFont, minFont algorithm will be used** | If this props provided maxFont and minFont will not work. this will use log function to size your word the function you provide as props.
|`clickEvent`|`function`|`  clickEvent={(x)=>console.log(x.word)}  ` | `false` | get the function for click event through this props.
|`color`|`array of string hex color code`|` color={['#71803F', '#F8AC1D','#598EC0','#E2543E']}  ` | `true` | color hex for randomise your word. more color more random it will be. user has control over this color generations not over its randomness
|`data`|`array`|` data={[{"word":"gt feature recipe","value":275},...]}  ` | `true` | data that you will provide for word cloud
<br/>


### Contribution

If you want to work in this project. fork it, use the files from 
```
src/lib/WordCloud
``` 
component to work. and,
```$xslt
npm run build
```
to build.

and send a pull request.



## Versioning

Current Version: ```0.1.7```

## Authors

* **Sazzad Sazib** - *Frontend Developer* - [Misfit Technologies ](http://misfit.tech/)



## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

