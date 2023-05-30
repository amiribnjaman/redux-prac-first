const { createStore } = require("redux");


const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'


const counterInitial = {
    count: 0
}

const incrementAction = () => {
    return {
        type: INCREMENT
    }
}

const decrementAction = () => {
    return {
        type: DECREMENT
    }
}

const counterReducer = (state = counterInitial, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + 1
            }
        case 'DECREMENT': 
            return {
                count: state.count - 1 
            }
    
        default:
            return state;
    }
}

const store = createStore(counterReducer)

store.subscribe(() => console.log(store.getState()))

store.dispatch(incrementAction())
store.dispatch(incrementAction())
store.dispatch(decrementAction())