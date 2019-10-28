import React from "react";
import { Route, RouteComponentProps } from "react-router-dom";

import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import CollectionPage from '../../pages/collectionpage/collection-page.component';
import "./shop.component.scss";


interface IShopPageProps extends RouteComponentProps {}

const ShopPage: React.FC<IShopPageProps> = ({match}) => (
      <div className="shop">
        <Route exact path={`${match.path}`} component={CollectionOverview}/>
        <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
      </div>
    );
export default ShopPage;
