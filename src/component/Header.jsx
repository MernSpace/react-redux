import React from 'react';

const Header = () => {
    return (
        <div>
            <div>
                <div className="nav">
                    <ul className="">
                        <li className=""><a href="/Todo">Todo</a> </li>
                        <li className=""><a href="/">Counter</a> </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;