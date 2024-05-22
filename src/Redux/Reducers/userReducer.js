import { combineReducers } from 'redux';

const initialState = {
    data: [{id:1, title:"hamma", category: "progam",}],
    loading:false,
    console: null,
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
        default:
          return state;
      }
};



export default userReducer;