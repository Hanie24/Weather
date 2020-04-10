// cuando al exportar no ocupas 'default' usas llaves
import { url_base_weather, api_key } from './../Constants/ApiUrl';

const GetCityUrl = city => {
    return `${url_base_weather}?q=${city}&appid=${api_key}`;
}

export default GetCityUrl;