import React from 'react';
 import Counter from "../component/counter.jsx";
import Header from "../component/Header.jsx";
const CounterPage = () => {
    return (
        <di>
            <Header/>
            <div className="container mt-5">
                <div className="d-flex justify-content-center">
                    <div className="col-md-6">
                        <Counter/>
                    </div>

                </div>
            </div>
        </di>
    );
};

export default CounterPage;