import { AppState } from '../store';
import { createSelector } from 'reselect';
import { Collections } from '../../models/collection.model';

const selectShop = (state: AppState) => state.shop;

export const selectShopCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectShopCollectionsOverview = createSelector(
  [selectShopCollections],
  collections => collections ? Object.keys(collections as Collections).map(collectionName => (collections as Collections)[collectionName]) : []
)

export const selectCollection = (urlParam: string) => createSelector(
  [selectShopCollections],
  collections => collections ? (collections as Collections)[urlParam] : null
)

export const selectIsFetching = createSelector(
  [selectShop],
  shop => shop.isFetching
)

export const selectIsCollectionLoaded = createSelector(
  [selectShop],
  shop => !!shop.collections
)