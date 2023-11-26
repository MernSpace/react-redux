import React from 'react';
import TodoComponent from "../component/TodoComponent.jsx";
import TodoList from "../component/TodoList.jsx";
import Header from "../component/Header.jsx";

const TodoPage = () => {
    return (
        <div>
            <Header/>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                                <h1>Create to do</h1>
                            </div>
                            <div className="card-body">
                                <TodoComponent/>
                                <TodoList/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TodoPage;