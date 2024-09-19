
import React from 'react';
import Label from './Label';

function ListItem(probs){
    return(
      <span className='list-item'>
        <div className='list-title'>

          <h4>{probs.title}</h4>

        </div>
        <div className='list-discr'>

          {probs.desc}

        </div>
        <div className='list-label'>
        <br/>
          <Label onAction={()=>{
            console.log('parent clicked');
            
          }} isActive={probs.isActive}/>

        </div>
    </span>
    );
  }

  export default ListItem;