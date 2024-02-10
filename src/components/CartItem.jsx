import {useDispatch} from "react-redux";
// import {toast} from "react-toastify";
import {remove} from "../redux/Slices/CartSlice";

function CartItem({item, itemIndex}) {
    const dispatch = useDispatch();

    function removeFromCart() {
        dispatch(remove(itemIndex));
        // eslint-disable-next-line no-unreachable
        // toast.error("Item removed from cart")
    }

    // make 10 words of the description
    function truncate(str) {
        return str.split(" ").splice(0, 13).join(" ");
    }


    return (
        <div className="grid grid-cols-1 md:grid-cols-1 gap-16 shadow-md p-5 rounded-lg">
            <div className="flex flex-row space-x-6">
                   <div className="w-[300px] flex justify-center items-center rounded-lg overflow-hidden h-[200px]">
                    <img src={item.image} alt="product" className="w-full h-full object-cover"/>
                </div>
                <div className="flex flex-col space-y-4">
                    <h1 className="font-semibold"
                    >{item.title}</h1>
                    <p className="mb:text-sm  font-normal text-left"
                    >{item.description ? truncate(item.description) : ""
                    }</p>
                    <div className="flex flex-row justify-between items-center">
                        <p className="font-semibold text-yellow-500">
                            $ {item.price}</p>
                        <img src="https://cdn-icons-png.flaticon.com/128/6815/6815040.png" alt="remove" className="w-7 h-7 cursor-pointer hover:scale-110 transition duration-300 ease-in-out
                        " onClick={removeFromCart}/>
                    </div>
                </div>
        </div>
        </div>
    );
}

export default CartItem;



