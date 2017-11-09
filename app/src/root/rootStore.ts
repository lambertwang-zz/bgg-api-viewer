// Dependencies
import { Store, createStore } from 'redux';

// Local
import { IState, reducer as rootReducer } from './rootReducer';

const rootStore: Store<IState> = createStore(rootReducer);

export default rootStore;
