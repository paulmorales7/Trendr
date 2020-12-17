import axios from "axios";

export default {
  getTopSearch: function() {
    return axios.get("https://dog.ceo/api/breeds/image/random");
  }
};