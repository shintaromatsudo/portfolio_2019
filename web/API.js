import axios from 'axios'

axios.defaults.withCredentials = true
axios.defaults.xsrfHeaderName = 'X-CSRF-Token'

let url
if (process.env.NODE_ENV === 'production') {
  console.log(process.env.NODE_ENV)
  url = 'https://shintaromatsudo.herokuapp.com'
} else {
  console.log(process.env.NODE_ENV)
  url = 'http://localhost:5000'
}

export function getBlogs() {
  return axios({
    method: 'get',
    url: url + '/blogs/'
  })
}

export function postBlog(data) {
  return axios({
    method: 'post',
    url: url + '/blogs/',
    params: data
  })
}

export function getBlog(data) {
  console.log(data)
  return axios({
    method: 'post',
    url: url + '/blogs/${data.id}',
    params: data
  })
}

export function updateBlog(data) {
  console.log(data)
  return axios({
    method: 'post',
    url: url + '/blogs/${data.id}',
    params: data
  })
}

export function deleteBlog(data) {
  return axios({
    method: 'post',
    url: url + '/blogs/${data.id}',
    params: data
  })
}
