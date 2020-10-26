import React from "react";
import renderer, { ReactTestRendererTree } from "react-test-renderer";
import { ReactComponent as InboxSvg } from "../../icons/inbox.svg";

import Component from "./index";
import { mount } from "enzyme";
import { actions } from "../../core/repository/commands";

test("Suggestion renders", () => {
  const component = renderer.create(
    <Component
      commandId={1}
      action={() => {}}
      Icon={InboxSvg}
      name="Test"
      shortcut={["A"]}
      displayIcon={true}
      displayShortcut={true}
      setCurrentActions={() => {}}
      setPlaceholder={() => {}}
      subActions={actions}
    ></Component>
  );
  const tree = component.toJSON() as ReactTestRendererTree;
  expect(tree).toMatchSnapshot();
});

test("Shortcut renders props properly", () => {
  const mockAction = jest.fn();
  const component = mount(
    <Component
      commandId={1}
      action={mockAction}
      Icon={InboxSvg}
      name="Test"
      shortcut={["A"]}
      displayIcon={true}
      displayShortcut={true}
      setCurrentActions={() => {}}
      setPlaceholder={() => {}}
      subActions={actions}
    ></Component>
  );

  const suggestion = component.find(".suggestion-container");
  suggestion.simulate("click");

  expect(mockAction).toBeCalled();
});
