import React from 'react';
import Card from './Card';

const CardList = ({robots}) =>{ 
    const cardcomponent = robots.map((ueser , i) =>{
        return (            
        <Card 
        key={i} 
        id={robots[i].id} 
        name={robots[i].name} 
        email={robots[i].email}
         />
         )

    })
    return(
        <div>
            {cardcomponent}
        </div>
    );
}
export default CardList;