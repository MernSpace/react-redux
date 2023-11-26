import {configureStore} from "@reduxjs/toolkit";
import CounterReducer from "../state/counter/counter.js"
import TodoReducer from "../state/Todo/TdoSlice.js"
export default  configureStore({
    reducer:{
        counter:CounterReducer,
        todo:TodoReducer
    }
})