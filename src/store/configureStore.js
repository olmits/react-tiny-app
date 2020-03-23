import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';  

export default function configureStore(initialState) {
    const store = createStore(rootReducer, initialState);
    
    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nexRootReducer = require('../reducers');
            store.replaceReducer(nexRootReducer);
        })
    }

    return store;
}