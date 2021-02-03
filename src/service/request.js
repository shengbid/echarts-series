import axios from 'axios'

const service = axios.create({
  timeout: 5000,
  baseURL: 'https://restapi.amap.com',
  header: {
    'User-Agent': "Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.95 Safari/537.36"
  }
})

service.interceptors.request.use(
  config => {
    return config
  },
  error =>{
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    const res = response.data
    if (res) {
      return res
    } else {
      return Promise.reject(new Error(res.message || 'error'))
    }
  }, 
  error => {
    return Promise.reject(error)
  }
)

export default service