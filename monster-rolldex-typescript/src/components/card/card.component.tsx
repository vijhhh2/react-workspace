import React from 'react';
import './card.component.css';
import { Monster } from '../../models/monster.model';

interface Props {
    monster: Monster;
}

export const Card:React.FC<Props> = (props) => {
    return (
        <div className="card-container" >
            <img src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} alt="Monster"></img>
            <h2>{props.monster.name}</h2>
            <p>{props.monster.email}</p>
        </div>
    );
}

// export default Card;