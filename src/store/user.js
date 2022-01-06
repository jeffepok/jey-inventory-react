import AuthService from "../services/auth";

// Action Types
const USERNAME_ENTERED = "usernameEntered";
const PASSWORD_ENTERED = "passwordEntered";
const LOGGED_IN = "loggedIn";
const LOGGED_OUT = "loggedOut";
const LOADING_COMPLETED = "loadingCompleted";
const LOADING_STARTED = "loadingStarted";

// Actions Creators
export const usernameEntered = (username) =>{
    return {
        type: USERNAME_ENTERED,
        payload: username
    }
};
export const passwordEntered = (password) =>{
    return {
        type: PASSWORD_ENTERED,
        payload: password
    };
};

export const loggedIn = () =>{
    return {
        type: LOGGED_IN,
    };
};

export const loadingCompleted = () => {
    return {
        type: LOADING_COMPLETED
    }
}

export const loadingStarted = () => {
    return {
        type: LOADING_STARTED
    }
}
export const loggedOut = () =>{
    return {
        type: LOGGED_OUT
    }
}
// Reducer
const authService = new AuthService();

const initialState = {
    username: "",
    password: "",
    isAuthenticated: authService.getToken() ? true : false,
    loading: false
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case USERNAME_ENTERED:
            return {
                ...state,
                username: action.payload
            }

        case PASSWORD_ENTERED:
            return {
                ...state,
                password: action.payload
            }

        
        case LOGGED_IN:
            return {
                ...state,
                isAuthenticated: true,
            };
        
        case LOADING_COMPLETED:
            return {
                ...state,
                loading: false
            }
        
        case LOADING_STARTED:
            return {
                ...state,
                loading: true
            }
        
        case LOGGED_OUT:
            return {
                ...state,
                isAuthenticated: false
            }

        default: return state
    }
}