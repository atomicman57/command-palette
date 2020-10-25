import React, { useEffect } from 'react';
import Mousetrap from "mousetrap";
import { actions } from "./core/repository/commands";
import './App.scss';
import CommandPalette from '../src/components/CommandPalette'

const App: React.FC = () => {

  useEffect(() => {
    const commands = actions
      .map((action) => {
        return action.commands;
      })
      .flat();

    commands.forEach((command) => {
      const { shortcut, action } = command;
      const lowercaseShortcut = shortcut
        .map((st) => {
          return st.toLowerCase();
        })
        .join("+");
      Mousetrap.bind(lowercaseShortcut, () => action());
    });

    const firstElement = document.querySelector('.suggestion-container') as HTMLDivElement
    firstElement.focus()


    Mousetrap.bind("up", () => {
      const active = document.activeElement as HTMLElement;
      let sibling = active.previousSibling as HTMLElement;
      while (sibling && sibling.matches) {
        if (sibling.matches(".suggestion-container")) {
          sibling.focus();
          return true;
        }
        sibling = sibling.previousElementSibling as HTMLElement;
      }
    });

    Mousetrap.bind("down", () => {
      const active = document.activeElement as HTMLElement;
      let sibling = active.nextSibling as HTMLElement;
      while (sibling && sibling.matches) {
        if (sibling.matches(".suggestion-container")) {
          sibling.focus();
          return true;
        }
        sibling = sibling.nextElementSibling as HTMLElement;
      }
    });

    Mousetrap.bind("enter", () => {
      const active = document.activeElement as HTMLElement;
      active.click()
    });
  });


  return (
    <div className="App">
      <CommandPalette actions={actions} headerName="Lead Name Test Company" />
    </div>
  );
}
export default App;
