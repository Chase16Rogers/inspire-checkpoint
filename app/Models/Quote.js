export default class Quote {
  constructor(data) {
    this.quote = data.quote.body
    this.author = data.quote.author
  }

  get Template() {
    return /*html*/`
    <p class="text-shadow text-center fs-large hover-show cursor-pointer">${this.quote}</p>
    <p class="text-shadow text-center d-none show">${this.author}</p>
  `
  }

} 