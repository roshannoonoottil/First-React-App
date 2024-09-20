import React from "react";
import ListItem from "./Listitem";
import Tools from "../components/Tools";
import SimpleList from "./SimpleList";

let arr = [
  {
    id:1,
    title: "First Title",
    desc: "First Title Description.",
    isActive: false,
  },
  {
    id:2,
    title: "Second Title",
    desc: "Second Title Description.",
    isActive: true,
  },
  {
    id:3,
    title: "Third Title",
    desc: "Third Title Description.",
    isActive: false,
  },
];

class List extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: arr,
      activeState: "all",
    };
  }

  onListChange = (evt) => {
    console.log(evt.target.value);
    const value = evt.target.value;
    // const newList = arr.filter((item)=>{

    //     if(value === 'all'){
    //         return true
    //     }
    //     if(value === 'active'){
    //         return item.isActive === true;
    //     }
    //     if(value === 'not-active'){
    //         return item.isActive === false;
    //     }
    //     return false

    // });

    // console.log(newList);

    // this.setState({
    //     data:newList
    // })

    this.setState({
      activeState: value,
    });
  };

  handleDelete = (item) =>{
    console.log('Delete', item);
    const newList = this.state.data.filter((element) => element.id !== item.id);
    this.setState({
        data:newList    
    });
    
  }

  handleLabelClick = (arg) =>{
    this.setState({
        activeState: arg
    })

  }

  // if we are using normal function we need to use bind(this) for arrow function no needed
  render() {
    const { data, activeState } = this.state;
    const newList = data.filter((item) => {
      if (activeState === "all") {
        return true;
      }
      if (activeState === "active") {
        return item.isActive === true;
      }
      if (activeState === "not-active") {
        return item.isActive === false;
      }
      return false;
    });

    return (
      <Tools LabelValue={activeState} onAction={this.onListChange}>
        <SimpleList onLabelClick={this.handleLabelClick} data={newList} onAction={this.handleDelete} />
      </Tools>
    );
  }
}

export default List;
