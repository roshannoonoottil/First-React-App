
import React from 'react';
import Label from './Label';

function ListItem(){
    return(
      <span className='list-item'>
      <hr/>
        <div className='list-title'>
          <h4>Title One</h4>
        </div>
        <div className='list-discr'>
          This is the first description
        </div>
        <div className='list-label'>
          <Label/>
          <Label/>
          <Label/>
        </div>
      <hr/>
    </span>
    );
  }

  export default ListItem;