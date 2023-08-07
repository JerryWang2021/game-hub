import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "470fca4648204f15ab05a6614243aa81",
  },
});
