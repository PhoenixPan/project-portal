import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { userSignUpReducer } from "../ducks/user-signup";
import { userLoginReducer } from "../ducks/user-login";
import { allUserDesignReducer } from "../ducks/user-design";

const rootReducer = combineReducers({
    form: formReducer,
    allUserDesigns: allUserDesignReducer,
    userSignUpResult: userSignUpReducer,
    userLoginResult: userLoginReducer
});

export default rootReducer;
