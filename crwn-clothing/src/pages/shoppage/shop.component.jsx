import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { createStructuredSelector } from 'reselect';

import CollectionOverview from '../../components/collection-overview/collection-overview.component'
import CollectionPage from '../../pages/collectionpage/collection.component'
import { connect } from 'react-redux';
import { fetchCollectionsAsync } from '../../redux/shop/shop.actions';
import { selectIsFetching, selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import './shop.component.scss'

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {

  componentDidMount() {
    const { fetchCollectionsAsync } = this.props;
    fetchCollectionsAsync();
  }

  render() {
    const { match, isCollectionsLoaded } = this.props;
    return (
      <div className="shop-page">
        <Switch>
          <Route exact path={`${match.path}`} render={(props) => <CollectionOverviewWithSpinner isLoading={!isCollectionsLoaded} {...props}/>}/>
          <Route exact path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={!isCollectionsLoaded} {...props} />}/>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isCollectionsFetching: selectIsFetching,
  isCollectionsLoaded: selectIsCollectionsLoaded
})

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsAsync: () => dispatch(fetchCollectionsAsync())
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
