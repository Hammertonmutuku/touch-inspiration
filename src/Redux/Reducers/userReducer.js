const initialState = {
    users: [],
    user: null,  
    loading:false,
    error: null,
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_USERS_REQUEST':
          return {
            ...state,
            loading: true,
          };
        case 'FETCH_USERS_SUCCESS':
          return {
            ...state,
            loading: false,
            users: action.payload,
          };
        case 'FETCH_USERS_FAILURE':
          return {
            ...state,
            loading: false,
            error: action.payload,
          };
          case 'FETCH_USER_REQUEST':
            return {
              ...state,
              loading: true,
            };
          case 'FETCH_USER_SUCCESS':
            return {
              ...state,
              loading: false,
              user: action.payload,
            };
          case 'FETCH_USER_FAILURE':
            return {
              ...state,
              loading: false,
              error: action.payload,
            };
            case 'EDIT_USER_REQUEST':
            return {
              ...state,
              loading: true,
            };
          case 'EDIT_USER_SUCCESS':
            return {
              ...state,
              loading: false,
              user: action.payload,
            };
          case 'EDIT_USER_FAILURE':
            return {
              ...state,
              loading: false,
              error: action.payload,
            };
        default:
          return state;
      }
};



export default userReducer;