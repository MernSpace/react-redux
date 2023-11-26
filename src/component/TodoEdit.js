import Swal from "sweetalert2";
import store from "../redux/store/store.js";
import {editTodo} from "../redux/state/Todo/TdoSlice.js";

export function todoEdit(i,item){
    Swal.fire({
        title: "Update ToDo?",
        input:"text",
        inputValue:item,
        inputValidator:(value)=>{
            if(value){
                store.dispatch(editTodo({index:i,ask:value}))
            }
        }
    })
}