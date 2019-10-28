import React from 'react';

import './collection-page.component.scss';
import { RouteComponentProps } from 'react-router';
import { connect } from 'react-redux';
import { AppState } from '../../redux/store';
import { selectCollection } from '../../redux/shop/shop.selector';
import { Collection } from '../../models/collection.model';
import CollectionItem from '../../components/collection-item/collection-item.component';

interface ICollectionPageProps extends RouteComponentProps {
    collection: Collection
}

const CollectionPage: React.FC<ICollectionPageProps> = ({ match, collection }) => {
  console.log(match.params);
  console.log(collection);
  const { items, title } = collection;
  return (
    <div className="collection-page">
      <h1 className='title'>{title}</h1>
      <div className='items'>
          {
              items.map(item => <CollectionItem key={item.id} item={item} />)
          }
      </div>
    </div>
  );
};

const mapStateToProps = (state: AppState, ownUrlParams: ICollectionPageProps) => ({
    collection: selectCollection((ownUrlParams.match.params as any).collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);
