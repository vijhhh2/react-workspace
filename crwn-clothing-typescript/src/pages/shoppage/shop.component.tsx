import React from "react";
import { Route, RouteComponentProps } from "react-router-dom";
import { connect } from 'react-redux';

import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import CollectionPage from '../../pages/collectionpage/collection-page.component';
import { Collection } from "../../models/collection.model";
import { fetchCollectionsAsync } from '../../redux/shop/shop.actions';
import { selectIsFetching, selectIsCollectionLoaded } from '../../redux/shop/shop.selector';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import "./shop.component.scss";
import { AppState } from "../../redux/store";
import { AnyAction, Dispatch } from "redux";

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

interface ICollectionPageProps extends RouteComponentProps {
  collection: Collection;
}

interface IShopPageProps extends RouteComponentProps {
  isCollectionsFetching: boolean;
  isCollectionLoaded: boolean;
  fetchCollections: () => void;
}


class ShopPage extends React.Component<IShopPageProps> {

  componentDidMount() {
    const { fetchCollections } = this.props;
    fetchCollections();
  }

  render() {
    const { match, isCollectionLoaded }  = this.props;
    return (
      <div className="shop">
        <Route exact path={`${match.path}`} render={(props) => <CollectionOverviewWithSpinner isLoading={!isCollectionLoaded} {...props}/>}/>
        <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={!isCollectionLoaded} {...props as ICollectionPageProps}/>}/>
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  isCollectionsFetching: selectIsFetching(state),
  isCollectionLoaded: selectIsCollectionLoaded(state)
})

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => ({
  fetchCollections: () => dispatch(fetchCollectionsAsync() as any)
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
