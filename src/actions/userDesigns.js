import { GET_ALL_USER_DESIGNS, GET_ALL_USER_DESIGNS_SUCCESS } from 'constants/actionTypes';

export const getAllUserDesignsAction = () => ({
    type: GET_ALL_USER_DESIGNS
});

export const getAllUserDesignsSuccessAction = allUserDesigns => ({
    type: GET_ALL_USER_DESIGNS_SUCCESS,
    allUserDesigns: allUserDesigns
});
