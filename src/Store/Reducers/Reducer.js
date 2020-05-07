import  PeopleReducer  from "./People";
import  WeatherReducer from "./Weather"
import { combineReducers } from "redux";



const Reducer = combineReducers({
    PeopleReducer: PeopleReducer,
    WeatherReducer: WeatherReducer
})

export default Reducer;