class HtmlParser {
  constructor (template, elementToAppend, data) {
    this.template = template
    this.elementToAppend = elementToAppend
    this.data = data
    this.render(this.template, this.elementToAppend, this.data)
  }

  render (template, elementToAppend, data) {
    const compailTemplate = Mustache.render(template, data)
    const htmlElement = this.parseToHtml(compailTemplate)
    const firstElement = this.getFirstElement(htmlElement)
    elementToAppend.appendChild(firstElement)
  }

  parseToHtml (compailTemplate) {
    const parser = new DOMParser()
    return parser.parseFromString(compailTemplate, 'text/html')
  }
  getFirstElement (document) {
    return document.body.firstChild
  }

}
