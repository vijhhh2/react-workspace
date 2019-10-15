import React from "react";
import "./shop.component.scss";

import { Collection } from "../../models/collection.model";

import SHOP_DATA from "./shop.data";

import CollectionPreview from "../../components/collection-preview/collection-preview.component";

interface IShopPageState {
  collection: Collection[];
}
interface IShopPageProps {}

class ShopPage extends React.Component<IShopPageProps, IShopPageState> {
  constructor(props: IShopPageProps) {
    super(props);

    this.state = {
      collection: SHOP_DATA
    };
  }

  render() {
    return (
      <div className="shop">
        {this.state.collection.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} id={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
