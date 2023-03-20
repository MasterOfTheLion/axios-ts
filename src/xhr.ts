import { AxiosRequestConfig, AxiosResponse, AxiosPromise } from './types'

export default function xhr(config: AxiosRequestConfig): void {
  const { data = null, url, method = 'get', headers, responseType } = config

  const request = new XMLHttpRequest()

  request.open(method.toUpperCase(), url, true)

  Object.keys(headers).forEach((name) => {
    if (data === null && name.toLowerCase() === 'content-type') {
      delete headers[name]
    }
    request.setRequestHeader(name, headers[name])
  })

  if (responseType) {
    request.responseType = responseType
  }

  request.send(data)

  request.onreadystatechange = function handleLoad() {
    if (request.readyState !== 4) {
      return
    }
    const responseHeaders = request.getAllResponseHeaders()
    const responseData =
      responseType && responseType !== 'text'
        ? request.response
        : request.responseText
    const response: AxiosResponse = {
      data: responseData,
      status: request.status,
      statusText: request.statusText,
      headers: responseHeaders,
      config,
      request,
    }
    resolve(response)
  }
}
