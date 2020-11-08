import axios from "axios";

const instance = axios.create({
        baseURL: ""
    }
)

export const  userAPI = {
    getWeather()  {
        return axios.get(`https://api.openweathermap.org/data/2.5/weather?appid=15a0c1a2d2be9b2201f410148fdec32f&q=Moscow&lang=ru&units=metric`)
            .then(response => {
                return response.data
            })
    }
}