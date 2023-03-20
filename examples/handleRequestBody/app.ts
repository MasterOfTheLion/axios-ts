import axios from '../../src/index'

axios({
  method: 'post',
  url: '/api/handleRequestBody/post',
  headers: {
    'content-type': 'application/json;charset=utf-8',
  },
  data: {
    a: 1,
    b: 2,
  },
})
