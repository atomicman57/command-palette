import React, { useEffect, useState } from "react";
import Mousetrap from "mousetrap";
import { actions } from "./core/repository/commands";
import CommandPalette from "../src/components/CommandPalette";
import { ActionCategory, Command } from "./core/repository/types";
import "./App.scss";

const App: React.FC = () => {
  const initialPlaceholder = "Type a command or search ...";
  const [currentActions, setCurrentActions] = useState(actions);
  const [placeholder, setPlaceholder] = useState(initialPlaceholder);

  const focusElement = () => {
    const element = document.querySelector(".suggestion-container") as HTMLDivElement;
    element?.focus();
  };

  useEffect(() => {
    const suggestionSelector = ".suggestion-container";

    Mousetrap.bind("up", () => {
      const active = document.activeElement as HTMLElement;
      if (!active.matches(suggestionSelector)) {
        focusElement();
      }
      let sibling = active.previousSibling as HTMLElement;
      while (sibling?.matches) {
        if (sibling.matches(suggestionSelector)) {
          return sibling.focus();
        }
        sibling = sibling.previousElementSibling as HTMLElement;
      }
    });

    Mousetrap.bind("down", () => {
      const active = document.activeElement as HTMLElement;
      if (!active.matches(suggestionSelector)) {
        focusElement();
      }
      let sibling = active.nextSibling as HTMLElement;
      while (sibling?.matches) {
        if (sibling.matches(suggestionSelector)) {
          return sibling.focus();
        }
        sibling = sibling.nextElementSibling as HTMLElement;
      }
    });

    Mousetrap.bind("enter", () => {
      const active = document.activeElement as HTMLElement;
      active?.click();
    });

    Mousetrap.bind("esc", () => {
        setCurrentActions(actions)
        setPlaceholder(initialPlaceholder)
    });
  });

  const getCommands = (actions: ActionCategory[]) => {
    return actions
      .map((action) => {
        return action.commands;
      })
      .flat();
  };

  useEffect(() => {
    const commands = getCommands(actions);
    const subCommands = commands.flatMap(({ subActions }) => {
      return subActions && getCommands(subActions);
    });

    const allCommands = [...commands, ...subCommands] as Command[];

    allCommands.forEach((command) => {
      const { shortcut, action, subActions, name } = command;
      const lowercaseShortcut = shortcut
        .map((singleShortcut) => {
          return singleShortcut.toLowerCase();
        })
        .join("+");

      Mousetrap.bind(lowercaseShortcut, () => {
        if (subActions?.length) {
          return action(() => {
            setCurrentActions(subActions);
            setPlaceholder(`${name}...`);
          });
        }
        action();
      });
    });
  });

  return (
    <div className="App">
      <CommandPalette
        placeholder={placeholder}
        setPlaceholder={setPlaceholder}
        setCurrentActions={setCurrentActions}
        actions={currentActions}
        headerName="Lead Name Test Company"
      />
    </div>
  );
};
export default App;
