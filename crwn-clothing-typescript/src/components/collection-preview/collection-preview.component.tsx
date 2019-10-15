import React from 'react';
import './collection-preview.component.scss';
import { Collection } from '../../models/collection.model';
import CollectionItem from '../collection-item/collection-item.component';


const CollectionPreview: React.FC<Collection> = ({title, items, id}) => (
    <div className="collection-preview">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">
            {
                items
                .filter((item, index) => index < 4)
                .map(({id, ...otherItemProps}) => (<CollectionItem key={id} id={id} {...otherItemProps} />))
            }
        </div>
    </div>
);

export default CollectionPreview;