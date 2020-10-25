import React from "react";
import Suggestion from "../Suggestion";
import { Command } from "../../core/repository/types";

const Commands: React.FC<{ commands: Command[] }> = ({ commands }) => {
  return (
    <>
      {commands.map((command, index) => {
        const { Icon, name, shortcut, commandId, action, displayIcon, displayShortcut } = command;
        return (
          <Suggestion
            Icon={Icon}
            name={name}
            shortcut={shortcut}
            commandId={commandId}
            action={action}
            key={index}
            displayShortcut={displayShortcut}
            displayIcon={displayIcon}
          />
        );
      })}
    </>
  );
};

export default Commands;
