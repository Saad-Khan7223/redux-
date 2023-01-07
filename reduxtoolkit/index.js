const cakeActions=require('./features/cake/cakeSlice').cakeActions
const iceActions=require('./features/iceCream/iceSlice').iceActions
const store=require('./app/store')
console.log('inital state', store.getState())
const unsubscribe=store.subscribe(()=>{
})

store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.restocked(3))
store.dispatch(iceActions.restocked(3))
unsubscribe()