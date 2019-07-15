const cartsReducer = (state = {}, action) => {
    switch (action.type) {
        case 'GET_DATA':
            return {
                ...state, cartInfo: action.payload
            };
        default:
            return state
    }
};

export default cartsReducer;