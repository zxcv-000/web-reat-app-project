const flagReducer = (state = {}, action) => {
  switch (action.type) {
    case 'CHANGE':
      return {
        flag: action.flag
      };

    default:
      return state
  }
};

export default flagReducer;