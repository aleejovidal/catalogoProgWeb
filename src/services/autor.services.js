import axios from "axios";
const API_URL = "http://localhost:8080/api/autor";

class AutorService {
  getAll() {
    return axios.get(API_URL);
  }
  get(id) {
    return axios.get(`${API_URL}/${id}`);
  }
  getLibros(id) {
  return axios.get(`http://localhost:8080/api/libros?idAutor=${id}`);
}
  findByApellido(apellido) {
    return axios.get(`${API_URL}?apellido=${apellido}`);
  }
  getByPais(pais) {
    return axios.get(`${API_URL}?pais=${pais}`);
  } 
}

export default new AutorService();
