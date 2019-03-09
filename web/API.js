import axios from 'axios'

export default function getBlogs() {
  return axios({
    method: 'get',
    url: 'http://localhost:5000/blogs/'
  })
}
