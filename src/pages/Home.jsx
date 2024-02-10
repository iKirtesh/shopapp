import {useEffect, useState} from "react";
import Product from "../components/Product";

function Home() {
        const API_URL = 'https://fakestoreapi.com/products';
        const [loader, setLoader] = useState(false);
        const [posts , setPosts] = useState([]);





        async function fetchProductData() {
            setLoader(true);
            try {
                const response = await fetch(API_URL);
                const data = await response.json();
                setPosts(data);
            } catch (error) {
                console.error('Error:', error);
                setPosts([]);
            }
            setLoader(false);
        }

        useEffect(() => {
            fetchProductData().then(r => r);
        }
        , []);

    return (
        <div className="flex flex-col mt-5">
            {
                loader ?
                    <div className="flex flex-col justify-center items-center h-screen">
                        <div className="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 mb-4"
                             style={{borderTopColor: 'transparent'}}>
                            <img src="https://cdn-icons-png.flaticon.com/128/601/601159.png" alt="logo"
                                 className="w-20 h-20"/>
                        </div>
                    </div>
                    :

                    posts.length > 0 ?
                        (
                            <div className="grid grid-cols-1 md:grid-cols-4 p-5">
                                {
                                    posts.map((post) => (
                                        <Product key={post.id} post={post} />
                                    ))
                                }
                            </div>
                        ) :
                        <div className="flex flex-col justify-center items-center h-screen">
                            <p className="text-2xl font-bold"> No products available</p>
                        </div>
            }
        </div>
    );
}

export default Home;