import React from 'react';
import './card-list.component.css';

import { Card } from '../card/card.component';

import { Monster } from '../../models/monster.model';


interface Props {
    monsters: Monster[];
}

export const CardList: React.FunctionComponent<Props> = (props) => {
    return(
        <div className="card-list">
         {
             props.monsters.map(monster => <Card key={monster.id} monster={monster}/> )
         }
        </div>
    )
}