import { Collections } from '../../models/collection.model';
import {
  ShopActions,
  FETCH_COLLECTIONS_SUCCESS,
  FETCH_COLLECTIONS_START,
  FETCH_COLLECTIONS_FAILED,
} from './shop.types';
import {
  firestore,
  convertCollectionDocToMap,
} from '../../firebase/firebase.service';

export const FetchCollectionsStart = (): ShopActions => ({
  type: FETCH_COLLECTIONS_START,
});

export const FetchCollectionsSuccess = (
  collections: Collections
): ShopActions => ({
  type: FETCH_COLLECTIONS_SUCCESS,
  payload: collections,
});

export const FetchCollectionsFailed = (error: string): ShopActions => ({
  type: FETCH_COLLECTIONS_FAILED,
  payload: error,
});

export const fetchCollectionsAsync = () => {
  return (dispatch: import('redux').Dispatch) => {
    const collectionRef = firestore.collection('collections');
    dispatch(FetchCollectionsStart());
    collectionRef
      .get()
      .then((snapshot: firebase.firestore.QuerySnapshot) => {
        const collections = convertCollectionDocToMap(snapshot);
        dispatch(FetchCollectionsSuccess(collections));
      })
      .catch(err => dispatch(FetchCollectionsFailed(err.message)));
  };
};
