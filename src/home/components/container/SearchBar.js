import React, { Component } from "react";
import Cities from "../../../assets/cities.json";
import { connect } from "react-redux";
import actions from "../../Actions";


class SearchBar extends Component {
    state = {
        searchedCity:""
    };

    handleChange(e){
        const searchValue  = Cities.cities.filter((city) =>
                city.toLowerCase() === e.target.value.toLowerCase()
        )

        if(searchValue.length){
            this.props.updateCityRequest(e.target.value)
            this.setState({searchedCity: e.target.value})
        }
    }

    render() {
        const {
            searchBarContainerStyle,
            searchBarStyle
          } = styles;

        return (
            <div style={searchBarContainerStyle}>
                   <input type='text' style={searchBarStyle} placeholder='Enter a city' onChange={ (e) => this.handleChange (e) }/>
            </div>
        );
    }
}

const styles = {
    searchBarContainerStyle: {
        paddingTop: 36,
        paddingBottom:12,
        display: "flex",
        justifyContent: "center",
        width: "100%",
        backgroundColor:"#3d4045"
    },
    searchBarStyle:{
        width: "80%",
        height: 24,
        padding: 10,
        borderRadius: 5,
        border: "1px solid #ddd",
        fontSize: 14,
        textAlign: "center"
    }
}


const mapStateToProps = state => ({
    searchValue: state.main.searchValue
});
  
const mapDispatchToProps = dispatch => ({
    updateCityRequest: (searchValue) =>
        dispatch(actions.updateCityRequest(searchValue)),

    updatePageNumber: () =>
        dispatch(actions.updatePageNumber()),
});


export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(SearchBar);