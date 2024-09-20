import React from "react";
import "./Label.css"; //css file import

//Function Component

// function Label(){
//     return <span>Label 1 </span>;
// }

//Class Component

class Label extends React.Component {
  render() {
    const props = this.props;
    const style = props.isActive
      ? { background: "green" }
      : { background: "orange" };
    return (
      <span onClick={()=>{
        props.onAction(props.isActive ? "active" : "not-active");
      }} className="list-label-item" style={style}>
        {props.isActive ? "Active" : "Not Active"}{" "}
      </span>
    );
  }
}

export default Label;
