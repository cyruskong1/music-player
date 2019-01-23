import axios from "axios";

const WebAPI = (method, key, query, url) => {
  return axios({
    url: url,
    method: method,
    params: {
      part: "snippet",
      key: key,
      query: query,
      chart: "mostPopular"
    }
  })
    .then(response => {
      console.log("response", response);
    })
    .catch(error => console.log(error));
};

export { WebAPI };
