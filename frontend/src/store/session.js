import csrfFetch from "./csrf";

//ACTION TYPES
const SET_USER = 'users/SET_USER';
const REMOVE_USER = 'users/REMOVE_USER';

//ACTION CREATORS
export const setCurrentUser = user => ({
    type: SET_USER,
    payload: user
})

export const removeCurrentUser = () => ({
    type: REMOVE_USER,
    // userId
})

//THUNK ACTION CREATOR
    // export const login = (user) => async dispatch => {
    //     const { credential, password} = user;
    //     const res = await csrfFetch('/api/session', {
    //         method: 'POST',
    //         body: JSON.stringify({
    //             // credential: user.credential,
    //             // password: user.password
    //             credential,
    //             password
    //         })
    //     })
    //     if(res.ok){
    //         let data = await res.json();
    //         console.log(data);
    //         dispatch(setCurrentUser(data.user));
    //         return res;
    //     }
    // }

//UNTIL WE CLEAR SESSION STORAGE, USE THIS AS THE USER!!!!!
const initialState = {
  user: JSON.parse(sessionStorage.getItem("currentUser"))
};

//REDUCERS
const sessionReducer = (state = initialState, action) => {
    const nextState = {...state};
    switch(action.type){
        case SET_USER:
            // return {...nextState, [action.payload.user.id]: action.payload.user};
            return { ...state, user: action.payload };
            case REMOVE_USER:
            delete nextState[action.userId]
            return nextState;
        default:
            return state;
    }
}


export default sessionReducer;

//login stuff and CSRF stuff
const storeCSRFToken = response => {
    const csrfToken = response.headers.get("X-CSRF-Token");
    if (csrfToken) sessionStorage.setItem("X-CSRF-Token", csrfToken);
  }

  const storeCurrentUser = user => {
    if (user) sessionStorage.setItem("currentUser", JSON.stringify(user));
    else sessionStorage.removeItem("currentUser");
  }

  //already had a login function above. commmented it out
  export const login = ({ credential, password }) => async dispatch => {
    const response = await csrfFetch("/api/session", {
      method: "POST",
      body: JSON.stringify({ credential, password })
    });
    const data = await response.json();
    storeCurrentUser(data.user);
    dispatch(setCurrentUser(data.user));
    return response;
  };

  export const restoreSession = () => async dispatch => {
    const response = await csrfFetch("/api/session");
    storeCSRFToken(response);
    const data = await response.json();
    storeCurrentUser(data.user);
    dispatch(setCurrentUser(data.user));
    return response;
  };

  // ...


  //SIGN UP
  export const signup = (user) => async (dispatch) => {
    const { username, email, password } = user;
    const response = await csrfFetch("/api/users", {
      method: "POST",
      body: JSON.stringify({
        username,
        email,
        password
      })
    });
    const data = await response.json();
    storeCurrentUser(data.user);
    dispatch(setCurrentUser(data.user));
    return response;
  };
