import React from 'react';
import './Label.css' //css file import


//Function Component

// function Label(){
//     return <span>Label 1 </span>;
// }


//Class Component

class Label extends React.Component{
    render(){
        return <span className='list-label-item'>Label 2 </span>;
    }
}

export default Label;