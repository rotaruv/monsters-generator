import React from "react";


const Card = (props) => {
    const {id, nume, email} = props;
    return (
        <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc">
            <img alt="robot" src={`https://robohash.org/${id}?set=set2`} />
            <h2>{nume}</h2>
            <p>{email}</p>
        </div>
    )
}

export default Card;