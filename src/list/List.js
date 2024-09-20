import React from 'react';
import ListItem from './Listitem'
import Tools from '../components/Tools';



let arr = [{
    title:'First Title',
    desc: 'First Title Description.',
    isActive:false
},
{
    title:'Second Title',
    desc: 'Second Title Description.',
    isActive:true
},
{
    title:'Third Title',
    desc: 'Third Title Description.',
    isActive:false
}]

class List extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            data:arr,
            activeState: 'all'
        };
    }

    onListChange = (evt)=>{
        console.log(evt.target.value);
        const value = evt.target.value
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
            activeState:value
        })
        
    }

    // if we are using normal function we need to use bind(this) for arrow function no needed
    render(){

         const {
            data,
            activeState
         } = this.state;
         const newList = data.filter((item)=>{

            if(activeState === 'all'){
                return true
            }
            if(activeState === 'active'){
                return item.isActive === true;
            }
            if(activeState === 'not-active'){
                return item.isActive === false;
            }
            return false

        });

        return(
            <Tools onAction={this.onListChange}> 
                <div className='app-list'>
                    {
                        newList.map((obj) =>{
                        return  <ListItem key={obj.title} onAction={this.myAction} title={obj.title} desc={obj.desc} isActive={obj.isActive}/>
                        })
                    }
                

                </div>
            </Tools>
        );
    }   

}

export default List;