const store=require('./app/store')
const fetchUsers=require('./features/userSlice').fetchUsers
console.log('iniital',store.getState())
const unsubscribe=store.subscribe(()=>console.log('updated',store.getState()))

store.dispatch(fetchUsers())

// unsubscribe()