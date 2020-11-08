import React from "react";
import {Header} from "./Header";
import {StateType} from "../../BLL/Redux/redux-store";
import {connect} from "react-redux";
import {WeatherType} from "../../BLL/Redux/WeatherReducer";

type MSTP={
    weather:WeatherType
}

type HeaderContainerPropsType=MSTP

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    render() {
        return (
            <Header weather={this.props.weather}/>
        )
    }
}

const mapStateToProps=(state:StateType)=>({
    weather:state.weather
})

export default connect(mapStateToProps,{})(HeaderContainer)