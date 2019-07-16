import React, { Component } from "react";
import HomeContainer from "../container/HomeContainer";
import SearchBar from "../container/SearchBar";


class HomePage extends Component {
    state = {  }
    render() {
        return (
            <React.Fragment>
                <SearchBar />
                <HomeContainer/>
            </React.Fragment>
        );
    }
}

export default HomePage;