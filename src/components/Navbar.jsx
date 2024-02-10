import React from "react";
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";


export default function Navbar() {
    const cart = useSelector((state) => state.cart);
    return (
        <div
            className="flex w-full flex-row justify-between py-3  text-gray-700 items-center shadow-md px-10 bg-white fixed top-0 z-10 rounded-b-lg">
            <NavLink to="/">
                <div className="flex flex-row items-center space-x-2 cursor-pointer">
                    <img src={"https://cdn-icons-png.flaticon.com/128/6145/6145758.png"} alt="logo"
                         className="w-10 h-10 mr-2"/>
                    <h1 className="text-2xl font-bold">Fake Store</h1>
                </div>
            </NavLink>

            <div className="flex flex-row justify-between items-center">
                <ul className="flex flex-row">
                    <li className="mr-5"
                    ><NavLink className="hover:text-yellow-500 transition duration-300 font-semibold"
                              to="/">Home</NavLink></li>

                    {/*show number of item of icon above
                    - https://cdn-icons-png.flaticon.com/128/1170/1170576.png
                    - {cart.length}
                    */}
                    <li className="mr-5 relative">
                        <NavLink className="hover:text-yellow-500 transition duration-300 font-semibold"
                                 to="/cart">
                            <img src="https://cdn-icons-png.flaticon.com/128/1170/1170576.png" alt="cart"  className="w-7 h-7"/>
                        </NavLink>
                        <div
                            className="absolute bottom-3 left-4 bg-yellow-custom animate-bounce
                             text-white w-5 h-5 flex items-center justify-center rounded-full">
                            {cart.length}
                        </div>

                    </li>
                </ul>
            </div>
        </div>

    );
}

