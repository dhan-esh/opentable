import { call, put, takeLatest, select } from "redux-saga/effects";
import constants from "./Types";
import actions from "./Actions";
import axios from "axios";
import * as selectors from "./Selectors";

function* updateCitySaga(action) {

    try {
        const fetchApi = async (searchValue) => axios.get(`http://opentable.herokuapp.com/api/restaurants?city=${searchValue}`)
            .then(
                function (response) {
                    // handle api success
                    const results = response.data;
                    return results
                }
            )
            .catch(function (error) {
                // handle api error
                console.log(error);
                return null;
            })

        const fetchRestaurantsData = yield call(fetchApi, action.payload);

        if (fetchRestaurantsData) {
            yield put(actions.updateCitySucces(fetchRestaurantsData, action.payload));
        }
    } catch (err) {
        console.log("error", err)
    }
}


function* updatePageNumberSaga(action) {

    try {
        const searchValue = yield select(selectors.searchValue);
        const currentPage = yield select(selectors.currentPage);

        let searchedValue = searchValue.charAt(0).toUpperCase() + searchValue.slice(1);
        let newPageNumber = currentPage + 1;

        const fetchApiv2 = async () => axios.get(`http://opentable.herokuapp.com/api/restaurants?city=${searchedValue}&page=${newPageNumber}`)
            .then(
                function (response) {
                    // handle api success
                    const results = response.data;
                    return results
                }
            )
            .catch(function (error) {
                // handle api error
                console.log(error);
                return null;
            })

        const fetchRestaurantsData = yield call(fetchApiv2);

        if (fetchRestaurantsData) {
            yield put(actions.updatePageNumberSuccess(fetchRestaurantsData));
        }
    } catch (err) {
        console.log("error", err)
    }
}

export function* MainSaga() {
    yield takeLatest(constants.UPDATE_CITY_REQUEST, updateCitySaga);
    yield takeLatest(constants.NEXT_PAGE_REQUEST, updatePageNumberSaga);
}