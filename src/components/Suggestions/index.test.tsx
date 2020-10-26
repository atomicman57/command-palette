import React from "react";
import renderer, { ReactTestRendererTree } from "react-test-renderer";
import { ReactComponent as InboxSvg } from "../../icons/inbox.svg";

import Component from "./index";
import { mount } from "enzyme";
import { actions } from "../../core/repository/commands";

test("Suggestion renders", () => {
  const component = renderer.create(
    <Component
      setPlaceholder={()=>{}}
      setCurrentActions={() => {}}
      isUserTyping={false}
      suggestions={actions}
    ></Component>
  );
  const tree = component.toJSON() as ReactTestRendererTree;
  expect(tree).toMatchSnapshot();
});

test("Shortcut renders props properly", () => {
  const component = mount(
    <Component
      setPlaceholder={()=>{}}
      setCurrentActions={() => {}}
      isUserTyping={false}
      suggestions={actions}
    ></Component>
  );

  const suggestion = component.find(".suggestion-container").first();
  suggestion.simulate("click");
  expect(suggestion.text()).toContain("Log an activity");
  expect(component.props().isUserTyping).toEqual(false);
});
