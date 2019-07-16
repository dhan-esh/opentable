import React from "react";
import { shallow } from "enzyme";
import HomePage from "./HomePage";
import "../../../setupTests";

describe("HomePage Component", () => {
  it("renders HomePage", () => {
    const wrapper = shallow(<HomePage />);
    expect(wrapper).toMatchSnapshot();
  });
});

