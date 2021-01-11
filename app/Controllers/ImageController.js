

import imageService from "../Services/ImageService.js"

//      (you may wish to set it as a background image: https://www.w3schools.com/JSREF/prop_style_backgroundimage.asp)
export default class ImageController {
  constructor() {
    this.getImage()
  }

  getImage() {
    try {
      imageService.getImage()
    } catch (error) {
      console.error(error)
    }
  }

}