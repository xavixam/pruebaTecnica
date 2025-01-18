const API_URL = "https://fakestoreapi.com";

const getAll = async () => {
    try {
        const response = await fetch(`${API_URL}/products`); // Obtén todos los productos
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching products:", error);
        throw error;
    }
};

const prodService = {
    getAll,
};

export default prodService;
