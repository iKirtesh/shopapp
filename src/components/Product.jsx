import {useDispatch, useSelector} from "react-redux";
import { add, remove } from "../redux/Slices/CartSlice";
// import {toast} from "react-toastify";



function Product({ post }) {

    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    function addToCart() {
        dispatch(add(post));
        // toast.success("Item added to cart")
    }

    function removeFromCart() {
        dispatch(remove(post.id));
        // toast.error("Item removed from cart")
    }

    function truncate1(str) {
        return str.split(" ").splice(0, 10).join(" ");
    }

    function truncate(str) {
        return str.split(" ").splice(0, 20).join(" ");
    }

    return (
        <div className="flex flex-col p-5 bg-white shadow-md rounded-xl items-center justify-between
        hover:scale-105 transition duration-300 space-y-4 mt-10  ml-5
        ">

                <p className="text-lg text-left mt-1 text-gray-700 font-semibold">{post.title ? truncate1(post.title) : ""}</p>
                <p className=" text-gray-400 font-normal text-[13px] text-left">{post.description ? truncate(post.description) : ""}</p>
            <div className="h-[180px] flex justify-center items-center rounded-lg overflow-hidden">
                <img src={post ? post.image : ""} alt="product" className="w-full h-full object-cover"/>
            </div>

            <div className="flex justify-between gap-14 items-center w-full mt-5">
                <p className=" text-yellow-500 text-left font-semibold text-lg
                ">$ {post.price}</p>
                <div className="">
                    {cart && cart.some((p) => p.id === post.id) ? (
                        <button className="bg-yellow-500 text-white p-2 rounded-lg text-sm"
                                onClick={removeFromCart}>Remove Item</button>
                    ) : (
                        <button className="bg-yellow-500 text-white p-2 rounded-lg text-sm"
                                onClick={addToCart}
                        >Add to Cart</button>
                    )
                    }
                </div>

            </div>
        </div>
    );

}

export default Product;