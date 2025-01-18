const API_URL = "https://fakestoreapi.com"

const getAll = async () => {
    try {
        const response = await fetch(`${API_URL}/products?limit=10`);
        const data = await response.json();
        return data; // Devuelve el JSON
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};

const prodService = {
    getAll,
};

export default prodService