import React from "react";
import renderer, { ReactTestRendererTree } from "react-test-renderer";
import CommandPalette from "./index";
import { mount } from "enzyme";
import { actions } from "../../core/repository/commands";

test("CommandPalette renders", () => {
  const component = renderer.create(
    <CommandPalette
      placeholder="A placeholder"
      setPlaceholder={() => {}}
      setCurrentActions={() => {}}
      actions={[]}
      headerName="Test"
    ></CommandPalette>
  );

  const tree = component.toJSON() as ReactTestRendererTree;
  expect(tree).toMatchSnapshot();
});

test("CommandPalette accepts props and render properly", () => {
  const component = mount(
    <CommandPalette
      placeholder="A placeholder"
      setPlaceholder={() => {}}
      setCurrentActions={() => {}}
      actions={actions}
      headerName="Test"
    ></CommandPalette>
  );

  const input = component.find("input");
  input.simulate("change", { target: { value: "Log an" } });

  const suggestion = component.find(".suggestion-container");

  expect(component.props().placeholder).toEqual("A placeholder");
  expect(component.props().headerName).toEqual("Test");
  expect(suggestion.text()).toContain("Log an activity");
});

  
