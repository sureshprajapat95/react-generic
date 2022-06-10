import axios from 'axios';

async function ApiService(URL, payload = {}) {
  const baseURL = 'https://echofounder.com/inquiry/';
  let data = {
    ...payload,
    device_id: 'dell_pc',
  };
  const response = axios({
    method: URL.method,
    url: baseURL + URL.route,
    data,
  });
  // return response.data;

  // const response = axios({
  //   method: URL.method,
  //   url: baseURL + URL.route,
  //   data,
  // }).then(function (response) {
  //   // handle success
  //   console.log(response);
  // });
}

export const Loader = () => {
  return isLoading;
};

export default ApiService;
