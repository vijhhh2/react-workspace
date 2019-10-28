import { AppState } from '../store';
import { createSelector } from 'reselect';

const selectDirectory = (state: AppState) => state.directory;

export const selectDirectorySections = createSelector(
    [selectDirectory],
    (directory) => directory.sections
)