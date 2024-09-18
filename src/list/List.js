import React from 'react';
import ListItem from './Listitem'

class List extends React.Component {

    render(){
        return(
            <div className='app-list'>
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/>
          </div>
        );
    }   

}

export default List;