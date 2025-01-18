import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getAll } from "../../features/prod/prodSlice";


const Home = () => {
    const { prod } = useSelector((state) => state.prod);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAll());
    }, []);

    console.log(prod);

    return (
        <>
        <div>
            <table>
                <tr>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Categories</th>
                </tr>
                {prod.map((product) => {
                    return (
                        <>
                        <tr>
                            <td>{product.title}</td>
                            <td>{product.price}</td>
                            <td>{product.category}</td>
                        </tr>
                        </>
                    )
                })}
                <tr>
                </tr>
            </table>
        </div>
        <div>
            <button>Next</button>
            <button>Prev</button>
        </div>

        </>
    )
}

export default Home