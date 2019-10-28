import { AppState } from '../store';
import { createSelector } from 'reselect';

const selectShop = (state: AppState) => state.shop;

export const selectShopCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectShopCollectionsOverview = createSelector(
  [selectShopCollections],
  collections => Object.keys(collections).map(collectionName => collections[collectionName])
)

export const selectCollection = (urlParam: string) => createSelector(
  [selectShopCollections],
  collections => collections[urlParam]
)