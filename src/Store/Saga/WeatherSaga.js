
import { takeEvery, put, call } from 'redux-saga/effects';

import * as API from '../../api/fetchWeather';


// // generator methods function* able to pause in middle when yeild is encounted
// export function* fetchWeather () {
//     // listen to every request trigger and dispach action. takeLatest - take latest request
//     yield takeEvery("FETCH_WEATHER", fetchAllPeople);
//     console.log('after call in saga');
// }

// // worker saga
// function* fetchAllPeople() {
//     // fetch people  from API
 
//    try {
//     console.log('Hi')
//    } catch (e) {
//        console.log('ERROR')
//    }
   
// }

export function* fetchWeather(param) {
    console.log('weather api')  
    // ways to get parameters in saga
    // https://github.com/redux-saga/redux-saga/issues/1101
    yield takeEvery('FETCH_WEATHER', fetchCurrentWeather);

}

function* fetchCurrentWeather(action) { 
    console.log('worker saga', action)
    try {
        let weather = yield call(() => API.fetchWeatherData(action.location[0], action.location[0]));
        yield put({ type: 'SAVE_WEATHER', value: weather });                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
        console.log(weather)
    } catch {

    }
}