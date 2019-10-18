import React from "react";
import "./collection-item.component.scss";

import { CollectionEachItem } from "../../models/collection.model";
import CustomButton from '../custom-button/custom-button.component';

const CollectionItem: React.FC<CollectionEachItem> = ({
  id,
  name,
  imageUrl,
  price
}) => (
  <div className="collection-item">
    <div
      className="image"
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    ></div>
    <div className="collection-footer">
      <span className="name">{name}</span>
      <span className="price">{price}</span>
    </div>
    <CustomButton inverted>ADD TO CART</CustomButton>
  </div>
);

export default CollectionItem;