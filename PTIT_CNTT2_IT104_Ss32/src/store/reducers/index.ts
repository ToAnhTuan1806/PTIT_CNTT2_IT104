import { combineReducers } from "redux";
import { userReducer } from "./userReducer";  
import { usersReducer } from "./usersReducer"; 
import { countReducer } from "./countReducer";
import { randomReducer } from "./randomReducer";
import { companyReducer } from "./companyReducer";
import { themeReducer } from "./themeReducer";
import { authReducer } from "./authReducer";

export const rootReducer = combineReducers({
  user: userReducer,    
  users: usersReducer, 
  count: countReducer,  
  random: randomReducer,
  company: companyReducer,
  theme: themeReducer, 
  auth: authReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
