import axios from 'axios';

const BASE_URL = 'https://api.escuelajs.co/api/v1/products';

class ProductosService {
  async getProductos(limit = 10, offset = 0) {
    try {
      const response = await axios.get(BASE_URL, {
        params: {
          limit: limit,
          offset: offset,
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error cargando productos:", error);
      throw error;
    }
  }
}

export default new ProductosService();