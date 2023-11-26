import React, {useRef} from 'react';
import {useDispatch} from "react-redux";
import {addTodo} from "../redux/state/Todo/TdoSlice.js";

const TodoComponent = () => {
    const dispatch= useDispatch()
    const inputs=useRef()
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-10">
                        <input ref={inputs} type="text" className="form-control" placeholder="Add Item"/>
                    </div>
                    <div className="col-md-2">
                        <button onClick={()=>{dispatch(addTodo(inputs.current.value))}} className="btn btn-primary">Add</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default TodoComponent;