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
  return response.data;
  // const [isLoading, setIsLoading] = useState(false);
  // const getReq = async () => {
  //   const response = await axios.get('https://swapi.dev/api/people/1/');
  //   return response;
  // };
}

export const Loader = () => {
  return isLoading;
};

export default ApiService;
