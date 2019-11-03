import { Collections } from '../../models/collection.model';
export const FETCH_COLLECTIONS_START = 'FETCH_COLLECTIONS_START';
export const FETCH_COLLECTIONS_SUCCESS = 'FETCH_COLLECTIONS_SUCCESS';
export const FETCH_COLLECTIONS_FAILED = 'FETCH_COLLECTIONS_FAILED';

interface FetchCollectionsStart {
  type: typeof FETCH_COLLECTIONS_START;
}

interface FetchCollectionsSuccess {
  type: typeof FETCH_COLLECTIONS_SUCCESS;
  payload: Collections;
}

interface FetchCollectionsFailed {
  type: typeof FETCH_COLLECTIONS_FAILED;
  payload: string;
}

export type ShopActions =
  | FetchCollectionsSuccess
  | FetchCollectionsStart
  | FetchCollectionsFailed;
