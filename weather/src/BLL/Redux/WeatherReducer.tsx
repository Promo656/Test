import {Dispatch} from "redux";
import {userAPI} from "../../DAL/API/api";

type AppActionType = GetDataType

export type WeatherType = {
    "coord": {
        "lon": number,
        "lat": number
    },
    "weather": [
        {
            "id": number,
            "main": string,
            "description": string,
            "icon": string
        },
        {
            "id": number,
            "main": string,
            "description": string,
            "icon": string
        }
    ],
    "base": string,
    "main": {
        "temp": number,
        "feels_like": number,
        "temp_min": number,
        "temp_max": number,
        "pressure": number,
        "humidity": number
    },
    "visibility": number,
    "wind": {
        "speed": number,
        "deg": number
    },
    "clouds": {
        "all": number
    },
    "dt": number,
    "sys": {
        "type": number,
        "id": number,
        "country": string,
        "sunrise": number,
        "sunset": number
    },
    "timezone": number,
    "id": number,
    "name": string,
    "cod": number
}

const initialState: WeatherType = {
    "coord": {
        "lon": 0,
        "lat": 0
    },
    "weather": [
        {
            "id": 0,
            "main": "",
            "description": "",
            "icon": ""
        },
        {
            "id": 0,
            "main": "",
            "description": "",
            "icon": ""
        }
    ],
    "base": "",
    "main": {
        "temp": 0,
        "feels_like": 0,
        "temp_min": 0,
        "temp_max": 0,
        "pressure": 0,
        "humidity": 0
    },
    "visibility": 0,
    "wind": {
        "speed": 0,
        "deg": 0
    },
    "clouds": {
        "all": 0
    },
    "dt": 0,
    "sys": {
        "type": 0,
        "id": 0,
        "country": "",
        "sunrise": 0,
        "sunset": 0
    },
    "timezone": 0,
    "id": 0,
    "name": "",
    "cod": 0
}


export const WeatherReducer = (state: WeatherType = initialState, action: AppActionType) => {
    switch (action.type) {
        case "GET_DATA": {
            return {
                ...state,
                coord: action.payload.coord,
                weather:action.payload.weather,
                base: action.payload.base,
                main: action.payload.main,
                visibility: action.payload.visibility,
                wind:action.payload.wind,
                clouds:action.payload.clouds,
                dt:action.payload.dt,
                sys:action.payload.sys,
                timezone:action.payload.timezone,
                id:action.payload.id,
                name:action.payload.name,
                cod:action.payload.cod
            }
        }
        default:
            return state
    }
}
//--------------------------------------GET-DATA-AC-------------------------------
const GET_DATA = "GET_DATA"
export type GetDataType = {
    type: typeof GET_DATA
    payload: WeatherType
}
export const GetDataAC = (payload: WeatherType): GetDataType => ({
    type: GET_DATA,
    payload: payload
})
//--------------------------------------GET-DATA-TC-------------------------------
export const GetDataTC = () => async (dispatch: Dispatch) => {
    let response = await userAPI.getWeather()
    dispatch(GetDataAC(response))
}