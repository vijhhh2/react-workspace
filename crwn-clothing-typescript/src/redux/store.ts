import { createStore, applyMiddleware, Middleware } from 'redux';
import { logger } from 'redux-logger';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

import rootReducer from './root.reducer';

const middleware: Middleware[] = [thunk];

if (process.env.NODE_ENV === 'development') {
    middleware.push(logger);
}

export type AppState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer, applyMiddleware(...middleware));

const persistor = persistStore(store);

export default {store, persistor};
