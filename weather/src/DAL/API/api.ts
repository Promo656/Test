import axios from "axios";

const instance = axios.create({
        baseURL: "https://https://api.openweathermap.org/data/2.5/weather?appid=15a0c1a2d2be9b2201f410148fdec32f&"
    }
)

export const userAPI = {
    getWeather() {
        return instance.get(`q=Moscow&lang=ru`)
            .then(response=>{
                return response.data
            })
    }
}