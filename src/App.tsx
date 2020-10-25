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

    // Mousetrap.bind("up", () => {
    //   const active = document.activeElement;
    //   let sibling = active.previousSibling;
    //   while (sibling) {
    //     if (sibling.matches(".suggestion-container")) {
    //       sibling.focus();
    //       return true;
    //     }
    //     sibling = sibling.previousElementSibling;
    //   }
    // });

    // Mousetrap.bind("down", () => {
    //   const active = document.activeElement;
    //   let sibling = active.nextSibling;
    //   while (sibling) {
    //     if (sibling.matches(".suggestion-container")) {
    //       sibling.focus();
    //       return true;
    //     }
    //     sibling = sibling.nextElementSibling;
    //   }
    // });
  });


  return (
    <div className="App">
      <CommandPalette actions={actions} headerName="Lead Name Test Company" />
    </div>
  );
}
export default App;
