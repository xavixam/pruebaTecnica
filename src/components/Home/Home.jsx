import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts, setPage } from "../../features/prod/prodSlice";

const Home = () => {
    const dispatch = useDispatch();
    const { prod, currentPage } = useSelector((state) => state.prod);

    useEffect(() => {
        dispatch(fetchProducts()); // Carga todos los productos al inicio
    }, [dispatch]);

    const handleNext = () => {
        dispatch(setPage({ page: currentPage + 1 }));
    };

    const handlePrev = () => {
        if (currentPage > 1) {
            dispatch(setPage({ page: currentPage - 1 }));
        }
    };

    return (
        <>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Categories</th>
                        </tr>
                    </thead>
                    <tbody>
                        {prod.map((product) => (
                            <>
                            <tr key={product.id}>
                                <td>{product.title}</td>
                                <td>{product.price}</td>
                                <td>{product.category}</td>
                            </tr>
                            </>
                        ))}
                    </tbody>
                </table>
            </div>
            <div>
                <button onClick={handlePrev} disabled={currentPage === 1}>
                    Prev
                </button>
                <button
                    onClick={handleNext}
                    disabled={prod.length < 10} // Deshabilita si no hay más productos
                >
                    Next
                </button>
            </div>
        </>
    );
};

export default Home;
