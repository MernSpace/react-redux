import React, {useRef} from 'react';
import {useSelector,useDispatch} from "react-redux";
import {increment, decrement, setCustom, reSet} from "../redux/state/counter/counter.js";

const Counter = () => {
    const number = useSelector((state)=>state.counter.value)

    const dispatch =useDispatch()
    const CustomNum= useRef()

    return (
        <div className="card">
            <div className="card-header bg-secondary">
                <h1 className="text-white">counter app</h1>
            </div>
            <div className="card-body">
                <h1>{number}</h1>
            </div>
            <div className="my-4">
                {/* eslint-disable-next-line no-undef */}
                <button onClick={()=>{dispatch(increment())}} className="btn btn-success">+</button>
                <button onClick={()=>{dispatch(decrement())}} className="btn mx-2 btn-danger">-</button>
            </div>
            <div className="my-4">
                <input ref={CustomNum} type="number" className="form-control my-2"/>
                <button className="btn w-50 " onClick={()=>{dispatch(setCustom(CustomNum.current.value))}}>SetCustom</button>
            </div>
            <div className="my-4">
                <button className="btn w-50 " onClick={()=>{dispatch(reSet())}}>Reset</button>
            </div>

        </div>
    );
};

export default Counter;