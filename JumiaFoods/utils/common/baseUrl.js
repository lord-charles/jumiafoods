import {Platform} from 'react-native';

let baseUrl = '';
{
  Platform.OS == 'android'
    ? (baseUrl = 'http://10.0.2.2:8000/')
    : (baseUrl = 'http://localhost:8000/');
}
export default baseUrl;
