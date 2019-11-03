import React from 'react';
import { connect } from 'react-redux';

import './collection-item.component.scss';
import { ShopItem } from '../../models/collection.model';
import CustomButton from '../custom-button/custom-button.component';

import { CartActions } from '../../redux/cart/cart.types';
import { addItem } from '../../redux/cart/cart.actions';

interface ICollectionItemProps {
  item: ShopItem;
  addItem: (item: ShopItem) => void;
}

const CollectionItem: React.FC<ICollectionItemProps> = ({ item, addItem }) => {
  const { name, imageUrl, price } = item;
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton
        className="custom-button"
        inverted
        onClick={() => addItem(item)}
      >
        ADD TO CART
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = (
  dispatch: import('redux').Dispatch<CartActions>
) => ({
  addItem: (item: ShopItem) => dispatch(addItem(item)),
});

export default connect(
  null,
  mapDispatchToProps
)(CollectionItem);
