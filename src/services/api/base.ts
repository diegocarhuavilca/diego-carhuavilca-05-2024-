import axios, { type AxiosRequestConfig } from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
  headers: {
    'Content-Type': 'application/json'
  }
})

const apiService = {
  get(url: string, config?: AxiosRequestConfig) {
    return axiosInstance.get(url, config)
  },
  post(url: string, data: any, config?: AxiosRequestConfig) {
    return axiosInstance.post(url, data, config)
  },
  put(url: string, data: any, config?: AxiosRequestConfig) {
    return axiosInstance.put(url, data, config)
  },
  delete(url: string, config?: AxiosRequestConfig) {
    return axiosInstance.delete(url, config)
  }
}

export default apiService
