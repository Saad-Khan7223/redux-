const redux=require('redux')
const reduxlogger=require ('redux-logger')
const middleware=redux.applyMiddleware


const logger=reduxlogger.createLogger()
const createStore=redux.createStore
const produce=require('immer').produce



// console.log(produce);
const initialState={
    name:'saad',
    address:{
        street:'123',
        city:'karachi'
    }
}

const Street_Updated='Street_Updated'

function street(address){
    return{
    type: Street_Updated,
    payload:address
}
}

const reducer=(state=initialState,action)=>{
    switch(action.type){
        // case 'Street_Updated':{
        //     return{
        //         ...state,
        //         ...state.address,
        //         street:action.payload
        //     }
        //}
          case 'Street_Updated':{
            return produce(state,(draft)=>{
                draft.address.street=action.payload
            })}
            
        default:
            return state
    
}
}

const store=createStore(reducer, middleware(logger))
console.log('inital State',store.getState())
const unsubscribe=store.subscribe(()=> console.log('updated State',store.getState()))

store.dispatch(street('petal gali'))

unsubscribe()