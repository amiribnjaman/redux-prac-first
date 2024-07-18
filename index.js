// const { createStore } = require("redux");

// import { createSlice, configureStore } from '@reduxjs/toolkit'
// const { createSlice, configureStore } = require('@reduxjs/toolkit')

// const INCREMENT = 'INCREMENT'
// const DECREMENT = 'DECREMENT'
// const BY_VALUE = 'BY_VALUE'

// const counterInitial = {
//     count: 0
// }

// const incrementAction = () => {
//     return {
//         type: INCREMENT
//     }
// }

// const decrementAction = () => {
//     return {
//         type: DECREMENT
//     }
// }

// const incrementCounterByValue = (value) => {
//     return {
//         type: BY_VALUE,
//         payload: value
//     }
// }

// const counterReducer = (state = counterInitial, action) => {
//     switch (action.type) {
//         case INCREMENT:
//             return {
//                 count: state.count + 1
//             }
//         case DECREMENT:
//             return {
//                 count: state.count - 1
//             }

//         case BY_VALUE:
//             return {
//                 count: state.count + action.payload
//             }

//         default:
//             return state;
//     }
// }

// const store = createStore(counterReducer)

// store.subscribe(() => console.log(store.getState()))

// store.dispatch(incrementAction())
// store.dispatch(incrementAction())
// store.dispatch(incrementAction())
// store.dispatch(incrementCounterByValue(5));
// store.dispatch(decrementAction())

// const counterSlice = createSlice({
//     name: 'counter',
//     initialState: {
//         count: 0
//     },
//     reducers : {
//         incremented : {
//             count: state.count + 1
//         },
//         decrementerd : {
//             count: state.count -1
//         }
//     }
// })

// const {
//     incremented,
//     decrementerd
// } = counterSlice.actions

// const store = configureStore({
//     reducers: counterSlice.reducers
// })

// store.subscribe(() => console.log(getState()))

// store.dispatch(incremented())

const createStore = require("redux");

// CONSTATNS
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

// INITIAL STATE
const initialState = {
  count: 0,
};

const incrementAction = () => {
  return {
    type: INCREMENT,
  };
};

const decrementAction = () => {
  return {
    type: DECREMENT,
  };
};

// REDUCER

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        count: state.count - 1,
      };

    default:
      return state;
  }
};

const state = createStore(reducers);

store.subscribe(() => {
  console.log(`value is ${store.getState()}`);
});

store.dispatch();
