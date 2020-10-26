import React from "react";
import renderer, { ReactTestRendererTree } from "react-test-renderer";
import Component from "./index";
import {shallow} from 'enzyme';

test("Input renders", () => {
  const component = renderer.create(<Component placeholder="Test" onChange={()=>{}}></Component>);
  const tree = component.toJSON() as ReactTestRendererTree;
  expect(tree).toMatchSnapshot();
});


test("Category renders props properly", () => {
  const mockAction = jest.fn();
  const component = shallow(<Component placeholder="Test" onChange={mockAction}></Component>);

  const input = component.find("input");
  input.simulate("change", { target: { value: "Log" } });
  expect(mockAction).toBeCalled();
});
