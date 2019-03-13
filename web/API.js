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

export function getBlog(data) {
  console.log(data)
  return axios({
    method: 'post',
    url: 'http://localhost:5000/blogs/${data.id}',
    params: data
  })
}

export function updateBlog(data) {
  console.log(data)
  return axios({
    method: 'post',
    url: 'http://localhost:5000/blogs/${data.id}',
    params: data
  })
}

export function deleteBlog(data) {
  return axios({
    method: 'post',
    url: 'http://localhost:5000/blogs/${data.id}',
    params: data
  })
}
