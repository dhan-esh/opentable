import mainConstants from "./Types";

const initialState = {
  searchValue: "",
  restaurantsList: [],
  currentPage: 1,
  totalEntries: 0,
  isPageNumberLoading: false,
  isFirstLoad: false,
};

export default (state = initialState, action) => {

  switch (action.type) {

    case mainConstants.UPDATE_CITY_REQUEST:
      return {
        ...state,
        isFirstLoad: true,
      };

    case mainConstants.UPDATE_CITY_SUCCESS:
      return {
        ...state,
        isFirstLoad: false,
        searchValue: action.payload.searchedCity,
        restaurantsList: action.payload.restaurantsData.restaurants,
        currentPage: action.payload.restaurantsData.current_page,
        totalEntries: action.payload.restaurantsData.total_entries
      };

    case mainConstants.NEXT_PAGE_SUCCESS:
      return {
        ...state,
        restaurantsList: state.restaurantsList.concat(action.payload.restaurants),
        currentPage: action.payload.current_page,
        totalEntries: action.payload.total_entries,
        isPageNumberLoading: false
      };

    case mainConstants.NEXT_PAGE_REQUEST:
      return {
        ...state,
        isPageNumberLoading: true
      };

    default:
      return state;
  }
};
