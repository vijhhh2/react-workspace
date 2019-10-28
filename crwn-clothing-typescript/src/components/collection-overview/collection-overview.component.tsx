import React from 'react';
import { connect } from 'react-redux';

import CollectionPreview from '../collection-preview/collection-preview.component';
import { Collection } from '../../models/collection.model';
import { AppState } from '../../redux/store';
import { selectShopCollectionsOverview } from '../../redux/shop/shop.selector';
import './collection-overview.component.scss';

interface ICollectionOverviewProps {
  collections: Collection[];
}

const CollectionOverView: React.FC<ICollectionOverviewProps> = ({
  collections,
}) => {
  return (
    <div className="collection-overview">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} id={id} {...otherCollectionProps} />
    ))}
  </div>
  );
};

const mapStateToProps = (state: AppState) => ({
  collections: selectShopCollectionsOverview(state),
});

export default connect(mapStateToProps)(CollectionOverView);
