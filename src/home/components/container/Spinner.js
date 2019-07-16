import React, { Component } from "react";

// First way to import
import { ClipLoader } from "react-spinners";

class Loader extends Component {

  render() {
    return (
      <div className="flexCenter sweet-loading">
        <ClipLoader sizeUnit={"px"} size={30} color={"white"} />
      </div>
    )
  }
}

export default Loader;
