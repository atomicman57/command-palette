import React from "react";
import { ReactComponent as InboxSvg } from "../../icons/inbox.svg";
import renderer, { ReactTestRendererTree } from "react-test-renderer";
import Component from "./index";
import { mount } from "enzyme";

test("Commands renders", () => {
  const component = renderer.create(
    <Component
    setPlaceholder={() => {}}
    setCurrentActions={() => {}}
    commands={[]}
  ></Component>
  );

  const tree = component.toJSON() as ReactTestRendererTree;
  expect(tree).toMatchSnapshot();
});

test("Commands accepts props and render properly", () => {
const mockAction = jest.fn();
  const component = mount(
    <Component
      setPlaceholder={() => {}}
      setCurrentActions={() => {}}
      commands={[{
        name: "Go to inbox",
        shortcut: ["G I"],
        Icon: InboxSvg,
        subActions: [],
        commandId: 4,
        displayIcon: true,
        displayShortcut: true,
        action: mockAction,
      },]}
    ></Component>
  );

  const suggestion = component.find(".suggestion-container");
  suggestion.simulate('click');
  
  expect(mockAction).toBeCalled();
  expect(suggestion.text()).toContain("Go to inbox");
});

  
