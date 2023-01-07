
const  redux=require('redux')

/// action creators
const CakeOrdered='CakeOrdered'
const restockedCake='restockedCake'

const IceCreamOrdered='IceCreamOrdered'
const restockedIceCream='restockedIceCream'
function orderCake(){
    return {
        type: CakeOrdered,
        payload:1
    }
}

function restock(qty){
    return {
        type:restockedCake,
        payload:qty
    }
}

function icecreamOrder(){
    return {
        type: IceCreamOrdered,
        payload:1
    }
}

function restockIcecrem(qty){
    return {
        type:restockedIceCream,
        payload:qty
    }
}

///Reducers
const initalState={
    numberOfCake:10,
    numberOfIceCream:10
}
const reducer=(state=initalState,action)=>{
    switch(action.type){
        case CakeOrdered:
            return{
                ...state,
                numberOfCake: state.numberOfCake-action.payload,
            }

            case restockedCake:
            return{
                ...state,
                numberOfCake:state.numberOfCake+ action.payload
            }

            case IceCreamOrdered:
            return{
                ...state,
                numberOfIceCream: state.numberOfIceCream-1,
            }

            case restockedIceCream:
            return{
                ...state,
                numberOfIceCream:state.numberOfIceCream+ action.payload
            }
        default:
            return state
    }
}

/// store
const createStore=redux.createStore
const store=createStore(reducer)
console.log('initalState',store.getState());
const unsubscribe=store.subscribe(()=>console.log('updated State',store.getState()))
const actions=redux.bindActionCreators({orderCake,restock,icecreamOrder,restockIcecrem},store.dispatch)
store.dispatch(orderCake())
actions.orderCake()
actions.restock(20)
actions.icecreamOrder()
unsubscribe()