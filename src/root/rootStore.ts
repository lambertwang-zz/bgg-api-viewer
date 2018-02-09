// Dependencies
import { Store, createStore } from 'redux';

// Local
import { IState, reducer as rootReducer } from './rootReducer';

const rootStore: Store<IState> = createStore<IState>(rootReducer);

export default rootStore;
