import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectShopCollectionsOverview } from '../../redux/shop/shop.selectors'

import CollectionPreview from '../../components/collection-preview/collection-preview.component'
import './collection-overview.component.scss'

const CollectionOverview = ({collections}) => (
  <div className="collection-overview">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectShopCollectionsOverview
})


export default connect(mapStateToProps)(CollectionOverview);
