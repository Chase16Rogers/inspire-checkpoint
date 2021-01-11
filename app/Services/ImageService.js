import { ProxyState } from "../AppState.js";
import Image from "../models/Image.js";
import { api } from "./AxiosService.js";

//TODO create methods to retrieve data and save to the State
class ImageService {

  async getImage() {
    let res = await api.get("images")
    let img = res.data.url
    document.body.style.backgroundImage = `url('${img}')`
    ProxyState.image = new Image(res.data)
  }


}

const imageService = new ImageService();
export default imageService;