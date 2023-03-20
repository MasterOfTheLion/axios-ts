import axios from '../../src/index'

axios({
  method: 'get',
  url: '/api/handleRequestURL/get',
  params: {
    a: 1,
    b: 2,
  },
})

axios({
  method: 'get',
  url: '/api/handleRequestURL/get',
  params: {
    foo: ['bar', 'baz'],
  },
})

axios({
  method: 'get',
  url: '/api/handleRequestURL/get',
  params: {
    foo: {
      bar: 'baz',
    },
  },
})

const date = new Date()
axios({
  method: 'get',
  url: '/api/handleRequestURL/get',
  params: {
    date,
  },
})

axios({
  method: 'get',
  url: '/api/handleRequestURL/get',
  params: {
    foo: '@:$, ',
  },
})

axios({
  method: 'get',
  url: '/api/handleRequestURL/get#hash?bar=baz',
  params: {
    foo: 'bar',
  },
})

axios({
  method: 'get',
  url: '/api/handleRequestURL/get?foo=bar',
  params: {
    bar: 'baz',
  },
})
