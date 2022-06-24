import axios from 'axios';

function ApiService(URL, payload=null) {
  // const response = await axios.get('https://swapi.dev/api/people/1/');
  
  const baseURL = 'https://api-url.com/api/';
  let data;
  if(payload){
    data = {
      ...payload,
      device_id: 'dell_pc',
    };
  }else{
    data = {};
  }
  const response = axios({
    method: URL.method,
    url: baseURL + URL.route,
    data,
  });
  return response

  // const response = axios({
  //   method: 'get',
  //   url: baseURL + apiRoutes.URL.route,
  //   data: {
  //     firstName: 'Fred',
  //     lastName: 'Flintstone',
  //   },
  // });
  // return response.data;
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
