import { createSelector } from "reselect";

const selectShop = state => state.shop;

export const selectShopCollections = createSelector(
    [selectShop],
    (shop) => shop.collections
);

export const selectShopCollectionsOverview = createSelector(
    [selectShopCollections],
    collections => Object.keys(collections).map(collection => collections[collection])
);

export const selectCollection = (collectionUrlParam) => createSelector(
    [selectShopCollections],
    collections => collections[collectionUrlParam]
)

export default selectShopCollections;