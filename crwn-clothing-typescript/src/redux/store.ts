import { createStore, applyMiddleware, Middleware } from 'redux';
import { logger } from 'redux-logger';

import rootReducer from './root.reducer';

const middleware: Middleware[] = [logger];

export type AppState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer, applyMiddleware(...middleware));


export default store;
