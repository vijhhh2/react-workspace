import { createSelector } from "reselect";

const selectShop = state => state.shop;

export const selectShopCollections = createSelector(
    [selectShop],
    (shop) => shop.collections
);

export const selectShopCollectionsOverview = createSelector(
    [selectShopCollections],
    collections => collections ? Object.keys(collections).map(collection => collections[collection]): []
);

export const selectCollection = (collectionUrlParam) => createSelector(
    [selectShopCollections],
    collections => collections ? collections[collectionUrlParam] : null
)

export const selectIsFetching = createSelector(
    [selectShop],
    shop => shop.isFetching
)

export const selectIsCollectionsLoaded = createSelector(
    [selectShop],
    shop => !!shop.collections
)

export default selectShopCollections;