const redux=require('redux')
const createStore=redux.createStore
const middleware=redux.applyMiddleware
const thunk=require('redux-thunk').default
const axios=require('axios')

const initialState = {
  loading: false,
  users: [],
  error: "",
};
const Fetch_Users_Requested = "Fetch_Users_Requested";
const Fetch_Users_Sucess = "Fetch_Users_Sucess";
const Fetch_Users_Failed = "Fetch_Users_Failed";

const fetchRequest = () => {
  return {
    type: " Fetch_Users_Requested",
  };
};

const fetchSucess = (users) => {
  return {
    type: " Fetch_Users_Sucess",
    payload: users,
  };
};

const fetchFailed = (error) => {
  return {
    type: " Fetch_Users_Failed",
    payload: error,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case " Fetch_Users_Requested": {
      return {
        ...state,
        loading: true,
      };
    }
    case " Fetch_Users_Sucess": {
        return {
            loading: false,
            ...state,
        users:action.payload,
        error:''
        
        };
      }


      case " Fetch_Users_Failed": {
        return {
            loading: false,
            ...state,
        users:[],
        error:action.payload
        
        };
      }
  }
};
const fetchUsers=()=>{
    
    return function(dispatch){
        dispatch(fetchRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response=>{
            const users=response.data.map((user)=>user.name)
            dispatch(fetchSucess(users))
        })
        .catch((err)=>{
            dispatch(fetchFailed(err))
        });
    }
}

const store=createStore(reducer, middleware(thunk))
store.subscribe(()=>{
    console.log(store.getState());
})
store.dispatch(fetchUsers())
