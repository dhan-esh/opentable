import constants from "./Types";

export default {
    // City search
    updateCityRequest: (searchValue) => ({
      type: constants.UPDATE_CITY_REQUEST,
      payload: searchValue
    }),

    updateCitySucces: (restaurantsData, searchedCity) => ({
      type: constants.UPDATE_CITY_SUCCESS,
      payload: {
        restaurantsData,
        searchedCity
      }
    }),

    //Page number update
    updatePageNumberRequest: () => ({
      type: constants.NEXT_PAGE_REQUEST,
      payload: { }
    }),

    updatePageNumberSuccess: (restaurantsData) => ({
      type: constants.NEXT_PAGE_SUCCESS,
      payload: restaurantsData
    }),
}  