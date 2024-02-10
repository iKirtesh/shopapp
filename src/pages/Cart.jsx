import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useEffect, useState } from "react";

function Cart() {
    const cart = useSelector((state) => state.cart);
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
        if (cart && cart.length > 0) {
            setTotalAmount(cart.reduce((acc, item) => acc + item.price, 0));
        } else {
            setTotalAmount(0);
        }
    }, [cart]);

    return (
        // use grid to display the cart items and the summary
        <div className="flex flex-col mt-32 w-10/12 mx-auto mb-8">
            {cart && cart.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div className="flex flex-col space-y-4">
                        {cart.map((item, index) => (
                            <CartItem key={index} item={item} itemIndex={index} />
                        ))}
                    </div>

                    <div className="flex flex-col space-y-2">
                        <div className="flex flex-col space-y-2">
                            <div className="text-2xl font-semibold"
                            >Your Cart</div>
                            <div className="text-lg"
                            >Summary</div>
                            <p className="text-lg font-semibold "    >
                                <span className="text-yellow-500">Total Items: {cart.length}</span>
                            </p>
                        </div>



                        {/* add it at the bottom of it*/}
                        <div className="flex flex-col space-y-2">
                            <p className="text-lg font-semibold mt-12"
                            >Total Amount : $ {totalAmount}</p>
                            <button className="bg-yellow-500 text-white px-4 py-2 rounded-md"
                            >Checkout</button>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="  w-full h-full flex mt-64 justify-center items-center">
                    <div className="flex flex-col items-center">
                        <h1 className="text-2xl">Cart Empty</h1>
                        <Link to="/">
                            <button className="bg-yellow-500 shadow-md text-white px-12 py-2 mt-2 rounded-lg hover:bg-yellow-600 transition duration-300 ease-in-out
                        ">Shop Now
                            </button>
                        </Link>
                    </div>
                </div>
                    )}
                </div>
            );
            }

            export default Cart;
