class UrlParser {
  constructor (url) {
    this.url = url
    this.convertToObject()
  }

  getParams (url) {
    let [firstParam, secondParam] = url.split('&')
    firstParam = firstParam.slice(1)
    return [firstParam, secondParam]
  }

  convertToObject () {
    let [firstParam, secondParam] = this.getParams(this.url)
    let [firstKey, firstValue] = firstParam.split('=')
    let [secondKey, secondValue] = secondParam.split('=')
    let obj = {}
    obj[firstKey] = firstValue
    obj[secondKey] = secondValue
    return obj
  }

}
