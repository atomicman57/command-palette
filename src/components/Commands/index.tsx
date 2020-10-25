import React from "react";
import Suggestion from "../Suggestion";
import { Command } from "../../core/repository/types";
import { ActionCategory } from "../../core/repository/types";

const Commands: React.FC<{
  commands: Command[];
  setCurrentActions: (userActions: ActionCategory[]) => void;
  setPlaceholder: (placehoder: string) => void;
}> = ({ commands, setCurrentActions, setPlaceholder }) => {
  return (
    <>
      {commands.map((command, index) => {
        const { Icon, name, shortcut, commandId, action, displayIcon, displayShortcut, subActions } = command;
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
            setCurrentActions={setCurrentActions}
            setPlaceholder={setPlaceholder}
            subActions={subActions}
          />
        );
      })}
    </>
  );
};

export default Commands;
