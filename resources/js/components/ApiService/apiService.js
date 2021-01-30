import axios from './axiosInstance'
export default class ApiService {
  static async get (address, config = null) {
    return await axios.get(address, config)
  }
  static async post (address, params, config = null) {
    return await axios.post(address, params, config)
  }
  static async delete (address, config = null) {
    return await axios.delete(address, config)
  }
  static async update (address, config = null) {
    return await axios.put(address, config)
  }
}
