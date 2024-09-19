import React from 'react';
import ListItem from './Listitem'
import Tools from '../components/Tools';



const arr = [{
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

    render(){
        return(
            <Tools>
                <div className='app-list'>
                    {
                        arr.map((obj) =>{
                        return  <ListItem key={obj.title} onAction={this.myAction} title={obj.title} desc={obj.desc} isActive={obj.isActive}/>
                        })
                    }
                

                </div>
            </Tools>
        );
    }   

}

export default List;