import React from "react";
import {AdditionalInformation} from "./AdditionalInformation";
import {StateType} from "../../BLL/Redux/redux-store";
import {connect} from "react-redux";
import {WeatherType} from "../../BLL/Redux/WeatherReducer";

type MSTP = {
    weather: WeatherType
}
type MDTP = {
    timeConverter: (time: number) => void
}

type AdditionalInformationContainerPropsType = MSTP & MDTP

export function timeConverter(UNIX_timestamp: number) {
    const a = new Date(UNIX_timestamp * 1000);
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const year = a.getFullYear();
    const month = months[a.getMonth()];
    const date = a.getDate();
    const hour = a.getHours();
    const min = a.getMinutes();
    const sec = a.getSeconds();
    const time = {/*date: date, month: month, year: year,*/ hour: hour /*, min: min, sec: sec*/};
    return time.hour;
}

class AdditionalInformationContainer extends React.Component<AdditionalInformationContainerPropsType> {
    render() {
        return (
            <AdditionalInformation weather={this.props.weather} timeConverter={timeConverter}/>
        )
    }
}

const mapStateToProps = (state: StateType) => ({
    weather: state.weather
})
export default connect(mapStateToProps, {timeConverter})(AdditionalInformationContainer)