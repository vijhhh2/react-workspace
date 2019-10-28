import React from 'react'
import { Route, Switch } from 'react-router-dom'

import CollectionOverview from '../../components/collection-overview/collection-overview.component'
import CollectionPage from '../../pages/collectionpage/collection.component'
import './shop.component.scss'

const ShopPage = ({ match }) => {
  console.log(match)
  return (
    <div className="shop-page">
      <Switch>
        <Route exact path={`${match.path}`} component={CollectionOverview}/>
        <Route exact path={`${match.path}/:collectionId`} component={CollectionPage}/>
      </Switch>
    </div>
  )
}

export default ShopPage
