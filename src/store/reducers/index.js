import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { users } from './users.reducer';
import { alert } from './alert.reducer';
import { buyerProfile } from './buyer.reducer';
import { buyerSavedAdzas } from './buyer.reducer';
import { seller } from './seller.reducer';

const rootReducer = combineReducers({
  authentication,
  registration,
  users,
  alert,
  buyerProfile,
  buyerSavedAdzas,
  seller
});

export default rootReducer;