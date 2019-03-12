import axios from 'axios'

axios.defaults.withCredentials = true
axios.defaults.xsrfHeaderName = 'X-CSRF-Token'

export function getBlogs() {
  return axios({
    method: 'get',
    url: 'http://localhost:5000/blogs/'
  })
}

export function postBlog(data) {
  return axios({
    method: 'post',
    url: 'http://localhost:5000/blogs/',
    params: data
  })
}
