import { GET_ALL_USER_DESIGNS_SUCCESS } from "sagas/ducks/user-design";

const allUserDesignReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_ALL_USER_DESIGNS_SUCCESS:
            return action.allUserDesigns;
        default:
            return null;
    }
};

export default allUserDesignReducer;
