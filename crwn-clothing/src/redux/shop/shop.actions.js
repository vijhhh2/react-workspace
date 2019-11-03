import { ShopActionsTypes } from './shop.types';
import { firestore, convertCollectionDocToMap } from '../../firebase/firebase.util';

export const fetchCollectionsStart = () => ({
    type: ShopActionsTypes.FETCH_COLLECTIONS_START
})

export const fetchCollectionsSuccess = (collectionMap) => ({
    type: ShopActionsTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionMap
});

export const fetchCollectionsFailed = (error) => ({
    type: ShopActionsTypes.FETCH_COLLECTIONS_FAILED,
    payload: error
})

export const fetchCollectionsAsync = () => {
    return dispatch => {
        const collectionRef = firestore.collection('collections');
        dispatch(fetchCollectionsStart());
        collectionRef.get()
        .then(snapshot => {
          const collections = convertCollectionDocToMap(snapshot);
          dispatch(fetchCollectionsSuccess(collections))
        })
        .catch(error => dispatch(fetchCollectionsFailed(error.message)))
    }
}