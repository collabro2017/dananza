import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { users } from './users.reducer';
import { alert } from './alert.reducer';
import { buyer } from './buyer.reducer';
import { seller } from './seller.reducer';

const rootReducer = combineReducers({
  authentication,
  registration,
  users,
  alert,
  buyer,
  seller
});

export default rootReducer;