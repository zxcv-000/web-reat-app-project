import {getData as getDataApi} from '../api'

export const getData = async (dispatch) => {
    const res = await getDataApi();
    dispatch(
        {
            type: 'GET_DATA',
            payload: res.data
        }
    )
};