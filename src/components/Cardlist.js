import React from "react";
import Card from "./Card";

const Cardlist = ({monsters}) => {
    const cardArray = monsters.map((user, i) => {
        return (
            <Card 
            key={i} 
            id={monsters[i].id} 
            nume={monsters[i].name} 
            email={monsters[i].email}/>            
        )
    })
    return (
        <div>{cardArray}</div>
  
    );
}

export default Cardlist;