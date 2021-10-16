import { shallow } from "enzyme";
import React from "react";
import CounterButton from "./CounterButton";

it("Expect to render CounterButton component", () => {
  expect(shallow(<CounterButton color={"red"}/>)).toMatchSnapshot();
})

it("Correctly increments the counter", () => {
  const wrapper = shallow(<CounterButton color={"red"}/>)

  wrapper.find('[id="counter"]').simulate('click');
  expect(wrapper.state()).toEqual({ count: 1 });
  expect(wrapper.props().color).toEqual('red');
})
