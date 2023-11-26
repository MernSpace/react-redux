import React from 'react';
import {useSelector} from "react-redux";
import {TodoDel} from "./TodoDel.js";
import {todoEdit} from "./TodoEdit.js"

const TodoList = () => {
    const todoItems =useSelector((state)=>state.todo.value)
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <table className="table">
                            <thead>
                            <tr>
                                <th>No:</th>
                                <th>Task Name</th>
                                <th>Edit</th>
                                <th>Remove</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                             todoItems.map((item,i)=>{
                                 return(
                                     <tr key={i.toString()}>
                                         <td>{i}</td>
                                         <td>{item}</td>
                                         <td><button onClick={()=>{todoEdit(i,item)}} className="btn btn-success">Edit</button></td>
                                         <td><button onClick={()=>{TodoDel(i)}} className="btn btn-danger"> Remove</button></td>
                                     </tr>
                                 )
                             })

                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TodoList;