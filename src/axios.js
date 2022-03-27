import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/clone-97111/us-central1/api", //API url(cloud function)
});

export default instance;
