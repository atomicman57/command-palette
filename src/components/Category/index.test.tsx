import React from "react";
import renderer, { ReactTestRendererTree } from "react-test-renderer";
import Category from "./index";
import {shallow} from 'enzyme';

test("Category renders", () => {
  const component = renderer.create(<Category name="Test Name"></Category>);
  const tree = component.toJSON() as ReactTestRendererTree;
  expect(tree).toMatchSnapshot();
});


test("Category renders name", () => {
  const category = shallow(<Category name="Test Name" />);
  expect(category.text()).toEqual('Test Name');
});
