import axios from "axios";

const instance = axios.create({
        baseURL: "https://community-open-weather-map.p.rapidapi.com/weather",
        headers: {
            "content-type": "application/octet-stream",
            "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
            "x-rapidapi-key": "10e0cf49a1msh3eed3506720343fp142f02jsn8d98ae559127",
            "useQueryString": true
        },
        params: {
            "lat": "52.455683",
            "lon": "44.202735",
            "callback": "test",
            "lang": "ru",
            "units": "metric",
            "mode": "xml",
            "q": "Serdobsk"
        }
    }
)

export const userAPI = {
    getWeather() {
        return instance(``)
    }
}