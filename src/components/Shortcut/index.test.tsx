import React from "react";
import renderer, { ReactTestRendererTree } from "react-test-renderer";
import Component from "./index";
import { shallow } from "enzyme";

test("Shortcut renders", () => {
  const component = renderer.create(<Component shortcut="Test" delimeter="then"></Component>);
  const tree = component.toJSON() as ReactTestRendererTree;
  expect(tree).toMatchSnapshot();
});

test("Shortcut renders props properly", () => {
  const component = shallow(<Component shortcut="Test" delimeter="then"></Component>);

  expect(component.text()).toContain("Test");
});
