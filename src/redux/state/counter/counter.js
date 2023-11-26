import  {createSlice} from "@reduxjs/toolkit";
export  const counterSclice= createSlice({
    name:"counter",
    initialState:{
        value:0
    },
    reducers:{
        increment:(state)=>{
            state.value=state.value+1
        },
        decrement:(state)=>{
          state.value=state.value-1
        },
        setCustom:(state,action)=>{
            state.value=action.payload;
        },
        reSet:(state,action)=>{
            state.value=0;
        }
    }
})

export const {increment,decrement,setCustom,reSet} =counterSclice.actions
export default counterSclice.reducer