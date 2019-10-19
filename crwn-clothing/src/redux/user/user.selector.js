import { createSelector } from 'reselect';

const user = state => state.user;

export const currentUser = createSelector([user], (user) => user.currentUser);