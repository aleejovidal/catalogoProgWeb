import axios from "axios";
const API_URL = "http://localhost:8080/api/libros";

class LibrosService {
  getAll() {
    return axios.get(API_URL);
  }
  get(id) {
    return axios.get(`${API_URL}/${id}`);
  }
  create(data) {
    return axios.post(API_URL, data);
  }
  update(id, data) {
    return axios.put(`${API_URL}/${id}`, data);
  }
  delete(id) {  
    return axios.delete(`${API_URL}/${id}`);
  }
  deleteAll() {
    return axios.delete(API_URL);
  }
  findByTitle(titulo) {
    return axios.get(`${API_URL}?titulo=${titulo}`);
  }
  getByGenero(genero) {
    return axios.get(`${API_URL}?genero=${genero}`);
  }
  getLibros(id) {
  return axios.get(`http://localhost:8080/api/libros?idAutor=${id}`);
}

}

export default new LibrosService();
