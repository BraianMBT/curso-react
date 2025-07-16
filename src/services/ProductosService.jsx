import axios from 'axios';

const BASE_URL = 'https://686ef07c91e85fac429f5c46.mockapi.io/api/products';

class ProductosService {
  async getProductos(limit = 10, offset = 0, search = '') {
    try {
      const page = offset / limit + 1;
      const params = {
        page: page,
        limit: limit,
      };
      if (search) {
        params.search = search;
      }
      const response = await axios.get(BASE_URL, { params });
      return response.data;
    } catch (error) {
      console.error("Error cargando productos:", error);
      throw error;
    }
  }

  async createProducto(producto) {
    try {
      const response = await axios.post(BASE_URL, producto);
      return response.data;
    } catch (error) {
      console.error("Error creando producto:", error);
      throw error;
    }
  }

  async updateProducto(id, producto) {
    try {
      const response = await axios.put(`${BASE_URL}/${id}`, producto);
      return response.data;
    } catch (error) {
      console.error("Error actualizando producto:", error);
      throw error;
    }
  }

  async deleteProducto(id) {
    try {
      const response = await axios.delete(`${BASE_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error eliminando producto:", error);
      throw error;
    }
  }
}

export default new ProductosService();
