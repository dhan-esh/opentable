//Libraries
import React, { Component } from "react";
import InfiniteScroll from 'react-infinite-scroller';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

// Redux
import { connect } from "react-redux";
import actions from "../../Actions";

//Components
import Spinner from "./Spinner";
import restaurantIcon from "../../../assets/restaurantIcon.svg";

class opentableApi extends Component {

    handleLoadRestaurants = () => {
        if (!this.props.isPageNumberLoading) {
            this.props.updatePageNumberRequest();
        }
    }

    render() {
        const {
            spinnerContainerStyle,
            messageContainerStyle,
            messageTitleStyle,
            imageContainerStyle,
            imageWrapperStyle,
            listContainerStyle,
            cardWrapperStyle,
            restaurantTitleStyle,
            buttonContainerStyle
        } = styles;
        return (
            this.props.isFirstLoad ?
                <div style={spinnerContainerStyle}>
                    <Spinner />
                </div> :
                !this.props.restaurantsList.length ? <div style={messageContainerStyle}>
                    <p>Welcome to restaurant finder</p>
                    <p style={messageTitleStyle}>Type in your city and let us find restaurants near you!</p>
                    <div style={imageContainerStyle}>
                        <img src={restaurantIcon} alt="Restaurant image" style={imageWrapperStyle} />
                    </div>
                </div> :
                    <div style={listContainerStyle} ref={(ref) => this.scrollParentRef = ref}>
                        <InfiniteScroll
                            pageStart={0}
                            loadMore={() => this.handleLoadRestaurants()}
                            hasMore={this.props.totalEntries > this.props.restaurantsList.length ? true : false}
                            loader={null}
                            getScrollParent={() => this.scrollParentRef}
                            useWindow={false}
                        >
                            {this.props.restaurantsList.map((city) =>
                                <Card key={city.id} style={cardWrapperStyle}>
                                    <CardContent>
                                        <Typography style={restaurantTitleStyle} gutterBottom>
                                            {city.name}
                                        </Typography>
                                        <Typography gutterBottom>
                                            {city.address}
                                        </Typography>
                                        <Typography gutterBottom>
                                            {`Price - ${city.price}`}
                                        </Typography>
                                        <Button
                                            target="_blank"
                                            style={buttonContainerStyle}
                                            href={`https://www.google.com/maps/dir/?api=1&destination=${city.lat},${city.lng}`}>Get Directions</Button>
                                    </CardContent>
                                </Card>
                            )}
                        </InfiniteScroll>
                    </div>
        );
    }
}

const styles = {
    spinnerContainerStyle: {
        height: 'calc(100vh - 100px)',
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        backgroundColor: "#3d4045"
    },
    messageContainerStyle: {
        height: 'calc(100vh - 130px)',
        display: "flex",
        justifyContent: "flex-start",
        flexDirection: "column",
        padding: 18,
        backgroundColor: "#3d4045",
        color: "#fff"
    },
    messageTitleStyle: {
        marginTop: 0
    },
    imageContainerStyle: {
        display: "flex",
        justifyContent: "center",
        flexDirection: "row", height: "60%"
    },
    imageWrapperStyle: {
        width: 150
    },
    listContainerStyle: {
        height: 'calc(100vh - 90px)',
        overflowY: "scroll",
        backgroundColor: "#3d4045"
    },
    cardWrapperStyle: {
        margin: 18,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        color: "black"
    },
    restaurantTitleStyle: {
        fontWeight: "bold"
    },
    buttonContainerStyle: {
        textTransform: 'none',
        cursor: "pointer",
        background: "lightgray"
    }
}

const mapStateToProps = state => ({
    isFirstLoad: state.main.isFirstLoad,
    isPageNumberLoading: state.main.isPageNumberLoading,
    searchValue: state.main.searchValue,
    restaurantsList: state.main.restaurantsList,
    currentPage: state.main.currentPage,
    totalEntries: state.main.totalEntries,
});

const mapDispatchToProps = dispatch => ({
    updatePageNumberRequest: () =>
        dispatch(actions.updatePageNumberRequest()),
});


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(opentableApi);